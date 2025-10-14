-- 1. Select all columns from customer table
SELECT * FROM customer;

-- 2. Display names as full_name alias
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. Select unique create_date from customer table
SELECT DISTINCT create_date FROM customer;

-- 4. All customer details in descending order by first name
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Film details in ascending order by rental rate
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

-- 6. Address and phone of customers in Texas district
SELECT address, phone 
FROM address 
WHERE district = 'Texas';

-- 7. Movie details where film_id is 15 or 150
SELECT * FROM film WHERE film_id IN (15, 150);

-- 8. Check if favorite movie exists (replace 'Your Favorite Movie' with actual title)
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Your Favorite Movie';

-- 9. Movies starting with first two letters of favorite movie (replace 'AB' with actual letters)
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'AB%';

-- 10. 10 cheapest movies
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

-- 11. Next 10 cheapest movies (using OFFSET)
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;

-- 12. Join customer and payment tables
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Movies not in inventory
SELECT f.*
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- 14. Cities and their countries
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

-- 15. Bonus: Customer payments ordered by staff member
SELECT 
    p.staff_id,
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id, c.customer_id;