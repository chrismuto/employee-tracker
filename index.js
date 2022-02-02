// import packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

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
inquirer
  .prompt([{
    type: "list",
    name: "mainMenu",
    message: "Select an option",
    choices: ["View all employees", "Add Employee", 'Update Employee Role', 'View all Roles', 'Add role', "View All Departments", 'Add Departments'],
  }, ])
  .then((answers) => {
    switch (answers.mainMenu) {
      case 'View all employees':
        db.query("SELECT * FROM employee", function (err, results) {
          // create an array of inquirer choice objects from the students
          const choices = results.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            salary: `${template literal}`
          }));
          console.table(choices);
        });
        break
      case 'Add Employee':
        console.log('Accounting');
        break
      case 'Update Employee Role':
        console.log('Sales');
        break
      case 'View All Roles':
        console.log('Auditing');
        break
        case 'Add Role':
          console.log('Sales');
          break
        case 'View All Departments':
          console.log('Auditing');
          break
      case 'Add Departments':
        console.log('Research');
    }
  });
  
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