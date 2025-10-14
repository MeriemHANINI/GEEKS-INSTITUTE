-- 1. Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results
SELECT first_name, last_name, email, etc... -- list all columns except id
FROM customers
ORDER BY first_name ASC, last_name ASC
LIMIT 2;

-- Alternative if you want the last 2 alphabetically (Z-A):
SELECT first_name, last_name, email, etc...
FROM customers
ORDER BY first_name DESC, last_name DESC
LIMIT 2;

-- 2. Use SQL to delete all purchases made by Scott
DELETE FROM purchases 
WHERE customer_id = (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott');

-- 3. Does Scott still exist in the customers table? Try and find him
SELECT * FROM customers 
WHERE first_name = 'Scott' AND last_name = 'Scott';

-- 4. Find all purchases with LEFT JOIN - Scott's orders will appear with blank customer info
SELECT p.*, c.first_name, c.last_name
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;

-- 5. Find all purchases with INNER JOIN - Scott's orders will NOT appear
SELECT p.*, c.first_name, c.last_name
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id;