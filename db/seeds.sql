INSERT INTO department (name)
VALUES ("Engineering"),
       ("Accounting"),
       ("Sales"),
       ("Auditing"),
       ("Research");
       
INSERT INTO job (title, salary, department_id)
VALUES ('associate', 50000, 3),
       ('Manager', 100000, 1),
       ('Maestro', 250000, 2),
       ('newbie', 50000, 4),
       ('Jeff', 75000, 5);

INSERT INTO employee (id, first_name, last_name, job_id, manager_id)
VALUES (5, 'John', 'Hangman', 3, 5),
       (4, 'Manager', 'Man', 1, 4),
       (3, 'Maestro', 'Supreme', 2, 3),
       (2, 'newbie', 'boy', 4, 2),
       (1, 'Jeff', 'Kaplan', 5, 1);