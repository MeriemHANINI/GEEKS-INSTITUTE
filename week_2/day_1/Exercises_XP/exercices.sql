CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- Create customers table
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Add items to the items table
INSERT INTO items (item_name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- Add customers to the customers table
INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- 1. All the items
SELECT * FROM items;

-- 2. All the items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- 3. All the items with a price below 300 (300 included)
SELECT * FROM items WHERE price <= 300;

-- 4. All customers whose last name is 'Smith'
SELECT * FROM customers WHERE last_name = 'Smith';

-- 5. All customers whose last name is 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- 6. All customers whose firstname is not 'Scott'
SELECT * FROM customers WHERE first_name != 'Scott';