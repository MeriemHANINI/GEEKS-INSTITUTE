-- Create the actors table (if it doesn't exist)
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER,
    number_oscars INTEGER
);

-- Insert some sample data
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
('Matt','Damon', 50, 5),
('George','Clooney', 60, 2),
('Brad','Pitt', 58, 2),
('Jennifer','Lawrence', 32, 1),
('Emma','Stone', 34, 1);

SELECT COUNT(*) AS total_actors FROM actors;

-- Attempt 1: Missing last_name (which is NOT NULL)
INSERT INTO actors (first_name, age, number_oscars) VALUES 
('Tom', 45, 0);

-- Attempt 2: Missing first_name (which is NOT NULL)
INSERT INTO actors (last_name, age, number_oscars) VALUES 
('Hanks', 45, 0);

-- Attempt 3: Missing both required fields
INSERT INTO actors (age, number_oscars) VALUES 
(45, 0);

-- Attempt 4: Missing optional fields (age and number_oscars)
INSERT INTO actors (first_name, last_name) VALUES 
('Tom', 'Cruise');