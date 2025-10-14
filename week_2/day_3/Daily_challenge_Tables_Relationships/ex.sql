-- Part I: One-to-One Relationship

-- Create Customer table
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create Customer_profile table
CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE, -- Ensures one-to-one relationship
    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id) 
        REFERENCES Customer(id)
        ON DELETE CASCADE
);

-- Insert customers
INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO Customer_profile (isLoggedIn, customer_id) VALUES
(true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

-- Display data using JOINs

-- 1. The first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- 2. All customers first_name and isLoggedIn columns (even without profile)
SELECT 
    c.first_name,
    COALESCE(cp.isLoggedIn, false) as isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- 3. The number of customers that are not LoggedIn
SELECT COUNT(*) as not_logged_in_count
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

-- Part II: Many-to-Many Relationship

-- Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table with age constraint
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15) -- Ensures age is never bigger than 15
);

-- Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table
CREATE TABLE Library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id), -- Composite primary key
    CONSTRAINT fk_book
        FOREIGN KEY (book_fk_id) 
        REFERENCES Book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_student
        FOREIGN KEY (student_fk_id) 
        REFERENCES Student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Add records to junction table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

-- Display data

-- 1. Select all columns from the junction table
SELECT * FROM Library;

-- 2. Select the name of the student and the title of the borrowed books
SELECT 
    s.name as student_name,
    b.title as book_title,
    l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
ORDER BY l.borrowed_date;

-- 3. Select the average age of the children that borrowed the book Alice in Wonderland
SELECT 
    ROUND(AVG(s.age), 2) as average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 4. Delete a student from the Student table and see what happens in the junction table

-- First, let's see the current state of the Library table
SELECT 'Before deletion - Library records:' as info;
SELECT * FROM Library;

-- Now delete a student (John)
DELETE FROM Student WHERE name = 'John';

-- Check what happened in the junction table
SELECT 'After deleting John - Library records:' as info;
SELECT * FROM Library;

-- Additional useful queries:

-- Show all students and their borrowed books (including students who haven't borrowed any)
SELECT 
    s.name as student_name,
    s.age,
    b.title as borrowed_book,
    l.borrowed_date
FROM Student s
LEFT JOIN Library l ON s.student_id = l.student_fk_id
LEFT JOIN Book b ON l.book_fk_id = b.book_id
ORDER BY s.name;

-- Show book borrowing statistics
SELECT 
    b.title,
    COUNT(l.student_fk_id) as times_borrowed,
    STRING_AGG(s.name, ', ') as borrowers
FROM Book b
LEFT JOIN Library l ON b.book_id = l.book_fk_id
LEFT JOIN Student s ON l.student_fk_id = s.student_id
GROUP BY b.book_id, b.title
ORDER BY times_borrowed DESC;

-- Show students who haven't borrowed any books
SELECT 
    s.name as student_name,
    s.age
FROM Student s
LEFT JOIN Library l ON s.student_id = l.student_fk_id
WHERE l.student_fk_id IS NULL;

-- Test the age constraint (this should fail)
-- INSERT INTO Student (name, age) VALUES ('TestStudent', 16);

-- Verify one-to-one relationship in Customer_profile
SELECT 
    c.first_name,
    c.last_name,
    cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;