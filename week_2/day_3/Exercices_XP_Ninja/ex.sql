-- Exercise 1: DVD Rentals - Family and Kids Movies

-- 1. Retrieve all films with rating G or PG that are not currently rented
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.rating,
    f.release_year,
    f.length,
    c.name AS category,
    f.rental_rate
FROM film f
LEFT JOIN film_category fc ON f.film_id = fc.film_id
LEFT JOIN category c ON fc.category_id = c.category_id
WHERE f.rating IN ('G', 'PG')
    AND f.film_id IN (
        -- Films that are available (either never rented or returned)
        SELECT i.film_id
        FROM inventory i
        WHERE i.inventory_id NOT IN (
            -- Exclude inventory items that are currently rented
            SELECT r.inventory_id
            FROM rental r
            WHERE r.return_date IS NULL
        )
    )
ORDER BY f.rating, f.title;

-- Alternative query using EXISTS for better performance
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.rating,
    f.release_year,
    f.length,
    c.name AS category,
    f.rental_rate
FROM film f
LEFT JOIN film_category fc ON f.film_id = fc.film_id
LEFT JOIN category c ON fc.category_id = c.category_id
WHERE f.rating IN ('G', 'PG')
    AND NOT EXISTS (
        -- Check if there are any outstanding rentals for this film
        SELECT 1
        FROM inventory i
        JOIN rental r ON i.inventory_id = r.inventory_id
        WHERE i.film_id = f.film_id
        AND r.return_date IS NULL
    )
ORDER BY f.rating, f.title;

-- 2. Create a waiting list table for children's movies
CREATE TABLE children_movie_waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    inventory_id INTEGER NOT NULL,
    child_name VARCHAR(100) NOT NULL,
    child_age INTEGER CHECK (child_age BETWEEN 3 AND 16),
    parent_email VARCHAR(255),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'waiting' CHECK (status IN ('waiting', 'notified', 'completed')),
    
    -- Foreign key constraints
    CONSTRAINT fk_waiting_film 
        FOREIGN KEY (film_id) 
        REFERENCES film(film_id) 
        ON DELETE CASCADE,
    
    CONSTRAINT fk_waiting_inventory 
        FOREIGN KEY (inventory_id) 
        REFERENCES inventory(inventory_id) 
        ON DELETE CASCADE,
    
    -- Ensure we don't have duplicate waiting entries for same inventory and child
    CONSTRAINT unique_child_inventory 
        UNIQUE (inventory_id, child_name)
);

-- Optional: Create an index for better performance on frequent queries
CREATE INDEX idx_waiting_film_id ON children_movie_waiting_list(film_id);
CREATE INDEX idx_waiting_status ON children_movie_waiting_list(status);

-- 3. Add sample data to the waiting list for testing
INSERT INTO children_movie_waiting_list 
    (film_id, inventory_id, child_name, child_age, parent_email) 
VALUES 
    (1, 1, 'Emma Johnson', 8, 'parent.johnson@email.com'),
    (1, 2, 'Liam Smith', 7, 'liam.parent@email.com'),
    (2, 5, 'Sophia Brown', 9, 'sophia.family@email.com'),
    (1, 1, 'Noah Davis', 6, 'noah.family@email.com'),
    (3, 8, 'Olivia Wilson', 10, 'olivia.parent@email.com'),
    (2, 5, 'Mason Miller', 8, 'mason.family@email.com');

-- 4. Retrieve the number of people waiting for each children's DVD
SELECT 
    f.film_id,
    f.title,
    f.rating,
    i.inventory_id,
    COUNT(wl.waiting_id) AS number_waiting,
    STRING_AGG(wl.child_name, ', ') AS waiting_children
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN children_movie_waiting_list wl ON i.inventory_id = wl.inventory_id
WHERE f.rating IN ('G', 'PG')
    AND wl.status = 'waiting'
GROUP BY f.film_id, f.title, f.rating, i.inventory_id
ORDER BY number_waiting DESC, f.title;

-- Enhanced query showing waiting list details with film information
SELECT 
    f.film_id,
    f.title,
    f.rating,
    c.name AS category,
    COUNT(wl.waiting_id) AS total_waiting,
    -- List of children waiting
    ARRAY_AGG(
        wl.child_name || ' (age ' || wl.child_age::TEXT || ')'
    ) AS waiting_children_list,
    -- Available inventory count for this film
    (
        SELECT COUNT(*) 
        FROM inventory i2 
        WHERE i2.film_id = f.film_id 
        AND i2.inventory_id NOT IN (
            SELECT r.inventory_id 
            FROM rental r 
            WHERE r.return_date IS NULL
        )
    ) AS available_copies
FROM film f
LEFT JOIN film_category fc ON f.film_id = fc.film_id
LEFT JOIN category c ON fc.category_id = c.category_id
LEFT JOIN children_movie_waiting_list wl ON f.film_id = wl.film_id
WHERE f.rating IN ('G', 'PG')
    AND (wl.status = 'waiting' OR wl.status IS NULL)
GROUP BY f.film_id, f.title, f.rating, c.name
HAVING COUNT(wl.waiting_id) > 0
ORDER BY total_waiting DESC, f.title;

-- Query to find films with the longest waiting lists
SELECT 
    f.title,
    f.rating,
    COUNT(wl.waiting_id) AS children_waiting,
    MIN(wl.date_added) AS oldest_waiting_since,
    MAX(wl.child_age) AS oldest_child_age,
    MIN(wl.child_age) AS youngest_child_age
FROM film f
JOIN children_movie_waiting_list wl ON f.film_id = wl.film_id
WHERE wl.status = 'waiting'
GROUP BY f.film_id, f.title, f.rating
ORDER BY children_waiting DESC;

-- Utility query: Mark a child as having received their DVD (simulating trigger behavior)
-- This would typically be done by our Python application
UPDATE children_movie_waiting_list 
SET status = 'completed' 
WHERE waiting_id = 1;

-- Check the updated waiting list
SELECT * FROM children_movie_waiting_list WHERE status = 'waiting';

-- Additional useful queries for management:

-- Find all available children's movies with no waiting list
SELECT 
    f.film_id,
    f.title,
    f.rating,
    COUNT(i.inventory_id) AS available_copies
FROM film f
JOIN inventory i ON f.film_id = i.film_id
WHERE f.rating IN ('G', 'PG')
    AND i.inventory_id NOT IN (
        SELECT inventory_id 
        FROM rental 
        WHERE return_date IS NULL
    )
    AND f.film_id NOT IN (
        SELECT DISTINCT film_id 
        FROM children_movie_waiting_list 
        WHERE status = 'waiting'
    )
GROUP BY f.film_id, f.title, f.rating
ORDER BY available_copies DESC;

-- View complete waiting list with contact information
SELECT 
    wl.waiting_id,
    f.title AS movie_title,
    wl.child_name,
    wl.child_age,
    wl.parent_email,
    wl.date_added,
    wl.status,
    -- Position in queue for this specific inventory
    (
        SELECT COUNT(*) 
        FROM children_movie_waiting_list wl2 
        WHERE wl2.inventory_id = wl.inventory_id 
        AND wl2.date_added < wl.date_added
        AND wl2.status = 'waiting'
    ) + 1 AS queue_position
FROM children_movie_waiting_list wl
JOIN film f ON wl.film_id = f.film_id
WHERE wl.status = 'waiting'
ORDER BY wl.inventory_id, wl.date_added;