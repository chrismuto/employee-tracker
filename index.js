// import packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

//create connection to mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

//opens main menu when console runs
function mainMenu() {
  inquirer
    .prompt([{
      type: "list",
      name: "mainMenu",
      message: "Select an option",
      choices: ["View All Employees",
        "Add Employee",
        'Update Employee Job',
        'View All Jobs',
        'Add Job',
        "View All Departments",
        'Add Departments'
      ],
    }, ])
    .then((answers) => {
      switch (answers.mainMenu) {
        case 'View All Employees':
          viewEmployees();
          break
        case 'Add Employee':
          addEmployee();
          break
        case 'Update Employee Job':
          updateEmployee();
          break
        case 'View All Jobs':
          viewJobs();
          break
        case 'View All Departments':
          viewDepartments();
          break
        case 'Add Job':
          addJob();
          break
        case 'Add Departments':
          addDepartment();
      }
    });
}

//provides a table of departments
const viewDepartments = () => {
  db.query('SELECT * from department', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  })
}

//provides a table of employees
const viewEmployees = () => {
  db.query('SELECT first_name, last_name from employee', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  })
}

//provides a table of existing jobs
const viewJobs = () => {
  db.query('SELECT title from job', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  })
}

//adds a new employee
const addEmployee = () => {
  inquirer
    .prompt([{
        type: "input",
        name: "firstName",
        message: "Enter first name",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter last name",
      },
      {
        type: "input",
        name: "newJobId",
        message: "Enter job ID",
      },
      {
        type: "input",
        name: "newManId",
        message: "Enter manager ID",
      }
    ])
    .then((answers) => {
      db.query(`INSERT INTO employee(first_name, last_name, job_id, manager_id) values ('${answers.firstName}', '${answers.lastName}', '${answers.newJobId}', '${answers.newManId}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        mainMenu();
      });
    });
}

//adds a new department
const addDepartment = () => {
  inquirer
    .prompt([{
      type: "input",
      name: "newDepartment",
      message: "Enter department ID",
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(name) values ('${answers.newDepartment}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        mainMenu();
      });
    });
}

//adds a new job
const addJob = () => {
  inquirer
    .prompt([{
        type: "input",
        name: "newRole",
        message: "Enter title",
      },
      {
        type: "input",
        name: "newSalary",
        message: "Enter salary",
      },
      {
        type: "input",
        name: "newDepId",
        message: "Enter Department ID",
      }
    ])
    .then((answers) => {
      db.query(`INSERT INTO job(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        mainMenu();
      });
    });
}

//changes an employee role
const updateEmployee = () => {
  db.query('SELECT * from employee', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    inquirer
      .prompt([{
          type: "input",
          name: "employeeTarget",
          message: "Enter employee ID to make changes",
        },
        {
          type: "input",
          name: "newJobId",
          message: "Enter new job ID",
        },
      ])
      .then((answers) => {
        db.query(`UPDATE employee SET job_id = ${answers.newJobId} WHERE id = ${answers.employeeTarget}`);
        if (err) {
          throw err
        } else {
        }
        mainMenu();
      });
  })
}

//runs starting menu when called
mainMenu();