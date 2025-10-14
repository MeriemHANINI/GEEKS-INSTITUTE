-- Update both Benichou twins' birth dates
UPDATE students
SET birth_date = '1998-11-02'
WHERE last_name = 'Benichou';

-- Change David's last name from Grez to Guez
UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

-- Delete Lea Benichou
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Count total students
SELECT COUNT(*) as total_students FROM students;

-- Count students born after 1/01/2000
SELECT COUNT(*) as students_after_2000
FROM students
WHERE birth_date > '2000-01-01';

-- Add math_grade column
ALTER TABLE students ADD COLUMN math_grade INTEGER;

-- Add grades to specific students
UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id IN (2, 4);
UPDATE students SET math_grade = 40 WHERE id = 6;

-- Count students with grade > 83
SELECT COUNT(*) as students_above_83
FROM students
WHERE math_grade > 83;

-- Add Omer Simpson with same birth_date as existing Omer
INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT first_name, last_name, birth_date, 70
FROM students
WHERE first_name = 'Omer' AND last_name = 'Simpson'
LIMIT 1;

-- Bonus: Count grades per student
SELECT first_name, last_name, COUNT(math_grade) as total_grades
FROM students
GROUP BY first_name, last_name;

-- Find the sum of all students grades
SELECT SUM(math_grade) as total_grades_sum
FROM students;