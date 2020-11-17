// TODONE: Write code to define and export the Employee class
const inquirer = require("inquirer")
const mysql = require("mysql");
const table = require("console.table")


class addFunctions {

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
    
      
    addItem(){
      inquirer.prompt([
          {
            type:"list",
            name:"add",
            message:"What would you like to add?",
            choices: [
                "department",
                "role",
                "employee"]  
          }
      ]).then((answer) => {
          if (answer.add === "department"){
              this.addDepartment()
          } else if(answer.add=== "role"){
              this.addRole()
          } else if(answer.add === "employee"){
              this.addEmployee();
          } 
        }).catch(error => {
          console.log("function add",error);
      })
   }

   addDepartment() {
    const connection = this.connection
    inquirer.prompt([
      {
        type:"input",
        name:"department",
        message:"write the department name."
      }
  ]).then((answer) => {
    connection.connect(function(r) {
      if (r) throw r;
      console.log("connected as id " + connection.threadId);
      connection.query("INSERT INTO department (name) VALUES (?)", answer.department, function(err, res){
        if (err) throw err;
        console.log(res);
        console.log("department successfully added")
        connection.end();
      });
    });


    }).catch(error => {
      console.log("function view", error);
  })
 

}

addRole() {
  const connection = this.connection
  inquirer.prompt([
    {
      type:"input",
      name:"role",
      message:"write the role title, salary, department id separating each entry by a comma"
    }
]).then((answer) => {
  const arrayAnswer=answer.role.split(',')
  console.log(arrayAnswer)
  connection.connect(function(r) {
    if (r) throw r;
    console.log("connected as id " + connection.threadId);
    connection.query("INSERT INTO role_ (title,salary,department_id) VALUES (?)", [arrayAnswer], function(err, res){
      if (err) throw err;
      console.log(res);
      console.log("role successfully added")
      connection.end();
    });
  });


  }).catch(error => {
    console.log("function view", error);
})
  
}

addEmployee() {
  const connection = this.connection
  inquirer.prompt([
    {
      type:"input",
      name:"employee",
      message:"write the first name, last name, role id, manager id, separating each entry by a comma."
    }
]).then((answer) => {
  const arrayAnswer=answer.employee.split(',')
  console.log(arrayAnswer)
  connection.connect(function(r) {
    if (r) throw r;
    console.log("connected as id " + connection.threadId);
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)", [arrayAnswer], function(err, res){
      if (err) throw err;
      console.log(res);
      console.log("engineer successfully added")
      connection.end();
    });
  });


  }).catch(error => {
    console.log("function view", error);
})
  
}

    

}


module.exports = addFunctions

