
const inquirer = require("inquirer")
const mysql = require("mysql");
const table = require("console.table")


class updateFunctions {

    constructor (connection1) {
    connection1 = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Cwoodfc2010!",
        database: "employee_management_system"
        });
        this.connection=connection1
    }
    
  
  updateEmployeeRole() {
    const connection=this.connection
    inquirer.prompt([
      {
        type:"input",
        name:"employee",
        message:"Please enter the id of the employee whose role you wish to change:",
      }
    ]).then((answer) => {inquirer.prompt([
      {
        type:"input",
        name:"employee",
        message:"Please enter the new role id:",
      }
    ]).then((answer1) => {
    
    console.log(answer)
    console.log(answer1)
    connection.connect(function(r) {
      
      if (r) throw r;
      console.log("connected as id " + connection.threadId);
      connection.query("UPDATE employee SET role_id  = ? WHERE id = ?", [answer1.employee, answer.employee], function(err, res){
        if (err) throw err;
        console.log(res)
        console.log("employee role successfully altered")
        connection.end();
      });
    });
    }).catch(error => {
      console.log("function view", error);
    })
    
      
    })
    
    
    
      
    }
  }

module.exports = updateFunctions

