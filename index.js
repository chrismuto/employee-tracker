// import packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const { sequelize } = require("sequelize");

//create connection to mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

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
        case 'View all employees':
          viewEmployees();
          break
        case 'Add Employee':
          addEmployee();
          break
        case 'Update Employee Role':
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

const viewEmployees = () => {
  db.query('SELECT employee.first_name, employee.last_name from employee', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  })
}

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

const addEmployee = () => {
  inquirer
  .prompt([
    {
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
    validate: {
      notNull: true,
      isInt: true
    }
  },
  {
    type: "input",
    name: "newManId",
    message: "Enter manager ID",
    validate: {
      notNull: true,
      isInt: true
    }
  }
])
  .then((answers) => {
    db.query(`INSERT INTO employee(first_name, last_name, job_id, manager_id) values ('${answers.firstName}', '${answers.lastName}', '${answers.newJobId}', '${answers.newManId}')`);
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  });
}

const addDepartment = () => {
  inquirer
    .prompt([{
      type: "input",
      name: "newDepartment",
      message: "Enter department",
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(name) values ('${answers.newDepartment}')`);
      if (err) {
        throw err
      } else {
        console.table(res)
      }
      mainMenu();
    });
}

const addJob = () => {
  inquirer
  .prompt([
    {
    type: "input",
    name: "newRole",
    message: "Enter title",
  },
  {
    type: "input",
    name: "newSalary",
    message: "Enter salary",
    validate: {
      notNull: true,
      isInt: true
    }
  },
  {
    type: "input",
    name: "newDepId",
    message: "Enter Department ID",
    validate: {
      notNull: true,
      isInt: true
    }
  }
])
  .then((answers) => {
    db.query(`INSERT INTO job(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`);
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  });
}

const updateEmployee = () => {

}
mainMenu();