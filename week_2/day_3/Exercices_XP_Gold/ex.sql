-- Exercise 1: DVD Rentals

-- 1. Get all rentals which are out (have not been returned)
SELECT 
    r.rental_id,
    r.rental_date,
    r.customer_id,
    i.film_id,
    f.title,
    c.first_name || ' ' || c.last_name AS customer_name
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
ORDER BY r.rental_date;

-- 2. Get all customers who have not returned their rentals (grouped by customer)
SELECT 
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    c.email,
    COUNT(r.rental_id) AS outstanding_rentals,
    MIN(r.rental_date) AS earliest_outstanding_rental
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, customer_name, c.email
ORDER BY outstanding_rentals DESC;

-- 3. Get all Action films with Joe Swank
-- Using a view as suggested for easier querying
CREATE OR REPLACE VIEW action_films_joe_swank AS
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.release_year,
    f.length,
    f.rating,
    c.name AS category_name,
    a.first_name || ' ' || a.last_name AS actor_name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
    AND a.first_name = 'Joe'
    AND a.last_name = 'Swank';

-- Query the view to get the results
SELECT * FROM action_films_joe_swank;

-- Alternative without view (direct query)
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.release_year,
    f.length,
    f.rating
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
    AND a.first_name = 'Joe'
    AND a.last_name = 'Swank';

-- Exercise 2 – Happy Halloween

-- 1. How many stores and their locations
SELECT 
    s.store_id,
    a.address,
    a.district,
    c.city,
    co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city c ON a.city_id = c.city_id
JOIN country co ON c.country_id = co.country_id
ORDER BY s.store_id;

-- 2. Total viewing hours per store (only returned items)
SELECT 
    i.store_id,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
FROM inventory i
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY i.store_id
ORDER BY i.store_id;

-- 3. All customers in cities where stores are located
SELECT DISTINCT
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    c.email,
    city.city AS customer_city,
    country.country AS customer_country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ON a.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE city.city IN (
    SELECT DISTINCT city.city
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ON a.city_id = city.city_id
)
ORDER BY city.city, customer_name;

-- 4. All customers in countries where stores are located
SELECT DISTINCT
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    c.email,
    city.city AS customer_city,
    country.country AS customer_country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ON a.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE country.country IN (
    SELECT DISTINCT country.country
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ON a.city_id = city.city_id
    JOIN country ON city.country_id = country.country_id
)
ORDER BY country.country, city.city, customer_name;

-- 5. Safe list movies (no horror/scary content) with total viewing time
CREATE OR REPLACE VIEW safe_movies AS
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.length,
    c.name AS category_name
FROM film f
LEFT JOIN film_category fc ON f.film_id = fc.film_id
LEFT JOIN category c ON fc.category_id = c.category_id
WHERE (c.name IS NULL OR c.name != 'Horror')
    AND (f.title NOT ILIKE '%beast%' 
         AND f.title NOT ILIKE '%monster%'
         AND f.title NOT ILIKE '%ghost%'
         AND f.title NOT ILIKE '%dead%'
         AND f.title NOT ILIKE '%zombie%'
         AND f.title NOT ILIKE '%undead%')
    AND (f.description NOT ILIKE '%beast%'
         AND f.description NOT ILIKE '%monster%'
         AND f.description NOT ILIKE '%ghost%'
         AND f.description NOT ILIKE '%dead%'
         AND f.description NOT ILIKE '%zombie%'
         AND f.description NOT ILIKE '%undead%');

-- Total viewing time for safe movies
SELECT 
    COUNT(*) AS safe_movie_count,
    SUM(length) AS total_minutes,
    ROUND(SUM(length) / 60.0, 2) AS total_hours,
    ROUND(SUM(length) / 60.0 / 24.0, 2) AS total_days
FROM safe_movies;

-- 6. General list (all available movies) total viewing time
SELECT 
    COUNT(*) AS total_movie_count,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
FROM inventory i
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL;

-- Additional: Safe movies available per store
SELECT 
    i.store_id,
    COUNT(DISTINCT sm.film_id) AS safe_movie_titles,
    SUM(sm.length) AS total_minutes,
    ROUND(SUM(sm.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(sm.length) / 60.0 / 24.0, 2) AS total_days
FROM inventory i
JOIN safe_movies sm ON i.film_id = sm.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY i.store_id
ORDER BY i.store_id;

-- Sample of safe movies for verification
SELECT 
    title,
    category_name,
    length,
    ROUND(length / 60.0, 2) AS hours
FROM safe_movies
ORDER BY length DESC
LIMIT 20;