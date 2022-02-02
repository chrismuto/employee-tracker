INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Accounting"),
       (3, "Sales"),
       (4, "Auditing"),
       (5, "Research");
       
INSERT INTO job (id, title, salary, department_id)
VALUES (1, associate, 50000, 3),
       (2, Manager, 100000, 1),
       (3, Maestro, 250,000, 2),
       (4, newbie, 50000, 4),
       (5, Jeff, 75000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, John, Hangman, 1, 3),
       (2, Manager, Man, 3, 1),
       (3, Maestro, Supreme, 2, 2),
       (4, newbie, boy, 5, 4),
       (5, Jeff, Kaplan, 4, 5);