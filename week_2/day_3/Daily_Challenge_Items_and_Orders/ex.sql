-- Product Orders System
-- Creating tables and functions for order management

-- Create users table (for bonus part)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create product_orders table
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_status VARCHAR(20) DEFAULT 'pending' CHECK (order_status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
    user_id INTEGER, -- For bonus part: relationship with users
    CONSTRAINT fk_user
        FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
        ON DELETE SET NULL
);

-- Create items table
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    order_id INTEGER NOT NULL,
    CONSTRAINT fk_order
        FOREIGN KEY (order_id) 
        REFERENCES product_orders(order_id)
        ON DELETE CASCADE
);

-- Insert sample data

-- First, insert users
INSERT INTO users (username, email) VALUES
('john_doe', 'john.doe@email.com'),
('jane_smith', 'jane.smith@email.com'),
('bob_wilson', 'bob.wilson@email.com');

-- Insert product orders
INSERT INTO product_orders (order_date, order_status, user_id) VALUES
('2024-01-15 10:30:00', 'delivered', 1),
('2024-01-16 14:20:00', 'shipped', 2),
('2024-01-17 09:15:00', 'pending', 1),
('2024-01-18 16:45:00', 'confirmed', 3);

-- Insert items for the orders
INSERT INTO items (item_name, description, price, order_id) VALUES
-- Order 1 items
('Laptop', 'Gaming laptop with RTX 4070', 1299.99, 1),
('Mouse', 'Wireless gaming mouse', 79.99, 1),
('Keyboard', 'Mechanical RGB keyboard', 149.99, 1),

-- Order 2 items
('Smartphone', 'Latest smartphone model', 899.99, 2),
('Phone Case', 'Protective phone case', 29.99, 2),

-- Order 3 items
('Book', 'Programming guide book', 45.99, 3),
('Notebook', 'High-quality notebook', 12.99, 3),
('Pen Set', 'Premium pen collection', 24.99, 3),

-- Order 4 items
('Headphones', 'Noise-cancelling headphones', 299.99, 4),
('Charger', 'Fast charging adapter', 39.99, 4);

-- Part 1: Function that returns the total price for a given order
CREATE OR REPLACE FUNCTION get_order_total_price(order_id_param INTEGER)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT COALESCE(SUM(price), 0)
    INTO total_price
    FROM items
    WHERE order_id = order_id_param;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

-- Test the function for order 1
SELECT 
    order_id,
    get_order_total_price(1) as total_price
FROM product_orders 
WHERE order_id = 1;

-- Test for all orders
SELECT 
    po.order_id,
    po.order_date,
    po.order_status,
    get_order_total_price(po.order_id) as total_price
FROM product_orders po
ORDER BY po.order_id;

-- Bonus: Function that returns the total price for a given order of a given user
CREATE OR REPLACE FUNCTION get_user_order_total_price(
    user_id_param INTEGER, 
    order_id_param INTEGER
)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2);
    user_order_count INTEGER;
BEGIN
    -- Check if the order belongs to the user
    SELECT COUNT(*)
    INTO user_order_count
    FROM product_orders
    WHERE order_id = order_id_param 
    AND user_id = user_id_param;
    
    IF user_order_count = 0 THEN
        RETURN 0; -- Return 0 if order doesn't belong to user
    END IF;
    
    -- Calculate total price
    SELECT COALESCE(SUM(i.price), 0)
    INTO total_price
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.order_id = order_id_param 
    AND po.user_id = user_id_param;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

-- Test the user-specific function

-- Valid user and order combination (user 1, order 1)
SELECT 
    u.username,
    po.order_id,
    get_user_order_total_price(1, 1) as total_price
FROM users u
JOIN product_orders po ON u.user_id = po.user_id
WHERE u.user_id = 1 AND po.order_id = 1;

-- Invalid combination (user 2 trying to access order 1 which belongs to user 1)
SELECT 
    u.username,
    po.order_id,
    get_user_order_total_price(2, 1) as total_price
FROM users u
JOIN product_orders po ON u.user_id = po.user_id
WHERE u.user_id = 2 AND po.order_id = 1;

-- Additional useful queries:

-- Display all orders with their items and totals
SELECT 
    po.order_id,
    u.username,
    po.order_date,
    po.order_status,
    i.item_name,
    i.price,
    get_order_total_price(po.order_id) as order_total
FROM product_orders po
JOIN users u ON po.user_id = u.user_id
JOIN items i ON po.order_id = i.order_id
ORDER BY po.order_id, i.item_id;

-- Summary of orders per user
SELECT 
    u.user_id,
    u.username,
    COUNT(po.order_id) as total_orders,
    SUM(get_order_total_price(po.order_id)) as total_spent
FROM users u
LEFT JOIN product_orders po ON u.user_id = po.user_id
GROUP BY u.user_id, u.username
ORDER BY total_spent DESC;

-- Detailed order breakdown
SELECT 
    po.order_id,
    u.username,
    po.order_date,
    po.order_status,
    COUNT(i.item_id) as item_count,
    get_order_total_price(po.order_id) as total_amount
FROM product_orders po
JOIN users u ON po.user_id = u.user_id
LEFT JOIN items i ON po.order_id = i.order_id
GROUP BY po.order_id, u.username, po.order_date, po.order_status
ORDER BY po.order_id;

-- Function to get order details including items
CREATE OR REPLACE FUNCTION get_order_details(order_id_param INTEGER)
RETURNS TABLE (
    item_name VARCHAR,
    description TEXT,
    price DECIMAL(10, 2),
    order_total DECIMAL(10, 2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        i.item_name,
        i.description,
        i.price,
        get_order_total_price(order_id_param) as order_total
    FROM items i
    WHERE i.order_id = order_id_param;
END;
$$ LANGUAGE plpgsql;

-- Test the order details function
SELECT * FROM get_order_details(1);

-- Function to get user's order history
CREATE OR REPLACE FUNCTION get_user_order_history(user_id_param INTEGER)
RETURNS TABLE (
    order_id INTEGER,
    order_date TIMESTAMP,
    order_status VARCHAR,
    item_count BIGINT,
    total_amount DECIMAL(10, 2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        po.order_id,
        po.order_date,
        po.order_status,
        COUNT(i.item_id) as item_count,
        get_order_total_price(po.order_id) as total_amount
    FROM product_orders po
    LEFT JOIN items i ON po.order_id = i.order_id
    WHERE po.user_id = user_id_param
    GROUP BY po.order_id, po.order_date, po.order_status
    ORDER BY po.order_date DESC;
END;
$$ LANGUAGE plpgsql;

-- Test user order history function
SELECT * FROM get_user_order_history(1);

-- Insert more test data to demonstrate the functions
INSERT INTO product_orders (order_date, order_status, user_id) VALUES
('2024-01-20 11:00:00', 'pending', 2);

INSERT INTO items (item_name, description, price, order_id) VALUES
('Tablet', '10-inch Android tablet', 349.99, 5),
('Stylus', 'Digital pen for tablet', 49.99, 5);

-- Verify the new order total
SELECT 
    order_id,
    get_order_total_price(5) as total_price,
    get_user_order_total_price(2, 5) as user_order_total
FROM product_orders 
WHERE order_id = 5;

-- Cleanup functions (if needed for testing)
-- DROP FUNCTION IF EXISTS get_order_total_price(INTEGER);
-- DROP FUNCTION IF EXISTS get_user_order_total_price(INTEGER, INTEGER);
-- DROP FUNCTION IF EXISTS get_order_details(INTEGER);
-- DROP FUNCTION IF EXISTS get_user_order_history(INTEGER);