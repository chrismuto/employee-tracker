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

// db.query("SELECT * FROM department", function (err, results) {
//   // create an array of inquirer choice objects from the students
//   const choices = results.map((student) => ({
//     name: `${student.first_name} ${student.last_name}`,
//     value: student,
//   }));
// prompt user
function mainMenu() {
  inquirer
    .prompt([{
      type: "list",
      name: "mainMenu",
      message: "Select an option",
      choices: ["View all employees",
        "Add Employee",
        'Update Employee Role',
        'View all Roles',
        'Add role',
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
          console.log('Sales');
          break
        case 'View All Jobs':
          viewRoles();
          break
        case 'Add Role':
          addRole();
          break
        case 'View All Departments':
          viewDepartments();
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

const viewRoles = () => {
  db.query('SELECT employee.first_name, employee.last_name from employee', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    mainMenu();
  })
}

const addEmployee = () => {

}

const addDepartment = () => {
  inquirer
    .prompt([{
      type: "input",
      name: "newDepartment",
      message: "Enter department",
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(name) values ('${answers.newDepartment}')`)
      mainMenu();
    });
}

const addRole = () => {
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
  },
  {
    type: "input",
    name: "newDepId",
    message: "Enter salary",
  }
])
  .then((answers) => {
    db.query(`INSERT INTO job(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`)
    mainMenu();
  });
}

const updateEmployee = () => {

}
// `SELECT job.id, job.title, job.salary, department.name AS department from job JOIN department ON job.department_id = department.id

// function ()
// do a query db.query(SELECT title FROM job. (res, err) => {
// error catch
// const options = res
// choices: options for that prompt
//}

// inquirer
// .prompt([{
//   type: "list",
//   name: "department",
//   message: "Select a department",
//   choices: ["Engineering", "Accounting", 'Sales', 'Auditing', 'Research'],
// }, ])
// .then((answers) => {
//   switch (answers.department) {
//     case 'Engineering':
//       db.query('SELECT * from employee')
//       console.log('Engineering');
//       break
//     case 'Accounting':
//       console.log('Accounting');
//       break
//     case 'Sales':
//       console.log('Sales');
//       break
//     case 'Auditing':
//       console.log('Auditing');
//       break
//     case 'Research':
//       console.log('Research');
//   }
// });
mainMenu();