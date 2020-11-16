const inquirer = require("inquirer")
const mysql = require("mysql");
const table = require("console.table")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Cwoodfc2010!",
  database: "employee_management_system"
  });

  inquirer.prompt([
      {
        type: "list",
        message: "Do you want to add, view or update?",
        name: "action",
        choices: [
        "Add",
        "View",
        "Update Employee Role"]
       }   
    ]).then((answer) => {
    console.log(answer.action)
 if (answer.action === "Add"){
     console.log("Add")
     addItem()
 } else if (answer.action === "View"){
    console.log("view")
    viewItem()
 }      
 else if (answer.action === "Update Employee Role"){
    console.log("update")
    updateEmployee()
 }
 else
 console.log("error")

    }).catch(error => {
      console.log("top level", error);
  })






function addItem(){
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
            addDepartment()
        } else if(answer.add=== "role"){
            addRole()
        } else if(answer.add === "employee"){
            addEmployee();
        } 
      }).catch(error => {
        console.log("function add",error);
    })
 }

 function viewItem(){
  inquirer.prompt([
      {
        type:"list",
        name:"view",
        message:"What would you like to view?",
        choices: [
            "department",
            "role",
            "employee"]  
      }
  ]).then((answer) => {
      if (answer.view === "department"){
          viewDepartment()
      } else if(answer.view=== "role"){
          viewRole()
      } else if(answer.view === "employee"){
          viewEmployee();
      } 
    }).catch(error => {
      console.log("function view", error);
  })
}


function addDepartment() {
    
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

function addRole() {

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

function addEmployee() {

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

function viewDepartment() {
  connection.connect(function(r) {
    if (r) throw r;
    console.log("connected as id " + connection.threadId);
    connection.query("select * from department", function(err, res){
      if (err) throw err;
      console.table(res);
      connection.end();
  
})})
}

function viewRole() {
  connection.connect(function(r) {
    if (r) throw r;
    console.log("connected as id " + connection.threadId);
    connection.query("select * from role", function(err, res){
      if (err) throw err;
      console.table(res);
      connection.end();
  
})})
  
}

function viewEmployee() {
  connection.connect(function(r) {
    if (r) throw r;
    console.log("connected as id " + connection.threadId);
    connection.query("select * from employee", function(err, res){
      if (err) throw err;
      console.table(res);
      connection.end();
  
})})
  
}

function updateEmployee() {
 
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
}).catch(error => {
  console.log("function view", error)

  
})



  
}
