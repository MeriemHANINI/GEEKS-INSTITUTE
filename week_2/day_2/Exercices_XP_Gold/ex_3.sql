-- Part I: Create purchases table
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    item_id INTEGER REFERENCES items(id),
    quantity_purchased INTEGER NOT NULL
);

-- Insert purchases using subqueries
-- Scott Scott bought one fan
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT id FROM items WHERE item_name = 'Fan'),
    1
);

-- Melanie Johnson bought ten large desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT id FROM items WHERE item_name = 'Large Desk'),
    10
);

-- Greg Jones bought two small desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT id FROM items WHERE item_name = 'Small Desk'),
    2
);

-- Part II: Queries
-- 1. All purchases
SELECT * FROM purchases;

-- 2. All purchases joined with customers
SELECT p.*, c.first_name, c.last_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id;

-- 3. Purchases of customer with ID = 5
SELECT * FROM purchases WHERE customer_id = 5;

-- 4. Purchases for large desk AND small desk
SELECT p.*, i.item_name
FROM purchases p
JOIN items i ON p.item_id = i.id
WHERE i.item_name IN ('Large Desk', 'Small Desk');

-- 5. Customers who made purchases with item names
SELECT DISTINCT c.first_name, c.last_name, i.item_name
FROM customers c
JOIN purchases p ON c.id = p.customer_id
JOIN items i ON p.item_id = i.id;

-- 6. Try to insert purchase without item reference
INSERT INTO purchases (customer_id, quantity_purchased)
VALUES (1, 5);
-- This will likely FAIL if item_id is defined as NOT NULL
-- If it succeeds, it means item_id allows NULL values
-- But this creates referential integrity issues