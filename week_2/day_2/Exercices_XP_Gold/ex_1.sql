-- 1. Find out how many films there are for each rating
SELECT rating, COUNT(*) as number_of_films
FROM film
GROUP BY rating;

-- 2. Get a list of all movies with rating of G or PG-13
SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13');

-- 3. Filter further: under 2 hours, rental_rate under 3.00, sort alphabetically
SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120  -- length is in minutes
  AND rental_rate < 3.00
ORDER BY title ASC;

-- 4. Find a customer and update to your details
-- First, let's find a customer to update
SELECT customer_id, first_name, last_name FROM customer LIMIT 1;

-- Then update (replace 1 with actual customer_id and your details)
UPDATE customer 
SET first_name = 'YourFirstName', 
    last_name = 'YourLastName',
    email = 'your.email@example.com'
WHERE customer_id = 1;

-- 5. Update the customer's address
-- First find the address_id for the customer
SELECT address_id FROM customer WHERE customer_id = 1;

-- Then update the address (replace 5 with actual address_id)
UPDATE address
SET address = '123 Your Street',
    district = 'Your District',
    postal_code = '12345',
    phone = '123-456-7890'
WHERE address_id = 5;