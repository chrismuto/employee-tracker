INSERT INTO department (name)
VALUES ("Engineering"),
       ("Accounting"),
       ("Sales"),
       ("Auditing"),
       ("Research");
       
INSERT INTO job (title, salary, department_id)
VALUES (1, 'Associate', 50000, 3),
       (2, 'Manager', 100000, 1),
       (3, 'Engineer', 250000, 2),
       (4, 'Intern', 50000, 4),
       (5, 'Scientist', 75000, 5);

INSERT INTO employee (id, first_name, last_name, job_id, manager_id)
VALUES (5, 'John', 'Smith', 3, 5),
       (4, 'Hank', 'Bridges', 1, 4),
       (3, 'Lee', 'Steinman', 2, 3),
       (2, 'Anne', 'Bolyne', 4, 2),
       (1, 'Jeff', 'Kaplan', 5, 1);