-- Fetch all data from the table
SELECT * FROM students;

-- Fetch all first_names and last_names
SELECT first_name, last_name FROM students;

-- Fetch student with id = 2
SELECT first_name, last_name FROM students WHERE id = 2;

-- Fetch student with last_name = Benichou AND first_name = Marc
SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch students with last_name = Benichou OR first_name = Marc
SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch students whose first_names contain the letter 'a'
SELECT first_name, last_name FROM students 
WHERE first_name LIKE '%a%';

-- Fetch students whose first_names start with the letter 'a'
SELECT first_name, last_name FROM students 
WHERE first_name LIKE 'a%';

-- Fetch students whose first_names end with the letter 'a'
SELECT first_name, last_name FROM students 
WHERE first_name LIKE '%a';

-- Fetch students where second to last letter of first_name is 'a'
SELECT first_name, last_name FROM students 
WHERE first_name LIKE '%a_';

-- Fetch students with id = 1 AND 3 (using IN for multiple values)
SELECT first_name, last_name FROM students 
WHERE id IN (1, 3);

-- Fetch students with birth_date >= 2000-01-01 (all info)
SELECT * FROM students 
WHERE birth_date >= '2000-01-01';