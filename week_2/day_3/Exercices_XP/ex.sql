-- 🌟 Exercise 1: DVD Rental

-- 1. Get all languages
SELECT * FROM language;

-- 2. Get films joined with their languages
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- 4. Create new_film table and add films
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES 
('The Matrix Resurrections'),
('Dune: Part Two'),
('Oppenheimer'),
('Barbie');

-- 5. Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Add 2 movie reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
(1, 1, 'Mind-blowing sequel!', 9, 'An incredible return to the Matrix universe with stunning visuals and thought-provoking themes.'),
(2, 1, 'Epic sci-fi masterpiece', 10, 'Denis Villeneuve delivers another breathtaking adaptation that surpasses expectations.');

-- 7. Test DELETE CASCADE constraint
DELETE FROM new_film WHERE id = 1;
-- The corresponding review in customer_review table will be automatically deleted due to ON DELETE CASCADE

-- 🌟 Exercise 2: DVD Rental

-- 1. Update language of some films
UPDATE film 
SET language_id = 2 
WHERE film_id IN (1, 2, 3);

-- 2. Check foreign keys for customer table
-- To see foreign keys, you can use:
-- \d customer (in psql)
-- or query information_schema

SELECT 
    tc.table_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu 
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' 
    AND tc.table_name = 'customer';

-- 3. Drop customer_review table
DROP TABLE customer_review;
-- This is an easy step since it's our custom table with no dependencies from other tables

-- 4. Find outstanding rentals
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. Find 30 most expensive outstanding movies
SELECT 
    f.title,
    f.rental_rate,
    r.rental_date
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 6. Help friend find movies

-- The 1st film: Sumo wrestler film with Penelope Monroe
SELECT 
    f.title,
    f.description,
    a.first_name,
    a.last_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' 
    AND a.last_name = 'Monroe'
    AND f.description ILIKE '%sumo%';

-- The 2nd film: Short documentary (<1 hour), rated "R"
SELECT 
    title,
    length,
    rating,
    description
FROM film
WHERE length < 60 
    AND rating = 'R'
    AND description ILIKE '%documentary%';

-- The 3rd film: Matthew Mahan rental (>$4.00, returned between July 28 and August 1, 2005)
SELECT 
    f.title,
    p.amount,
    r.rental_date,
    r.return_date
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' 
    AND c.last_name = 'Mahan'
    AND p.amount > 4.00
    AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- The 4th film: Matthew Mahan watched, has "boat" in title/description, expensive to replace
SELECT 
    f.title,
    f.description,
    f.replacement_cost
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' 
    AND c.last_name = 'Mahan'
    AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;