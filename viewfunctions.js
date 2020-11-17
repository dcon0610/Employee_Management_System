// TODONE: Write code to define and export the Employee class
const inquirer = require("inquirer")
const mysql = require("mysql");
const table = require("console.table")


class viewFunctions {

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
    viewItem(){
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
              this.viewDepartment()
          } else if(answer.view=== "role"){
              this.viewRole()
          } else if(answer.view === "employee"){
            console.log("if statement entered")
            this.viewEmployee();
          } 
        }).catch(error => {
          console.log("function view", error);
      })
    }
      viewEmployee() {
        const connection=this.connection
        connection.connect(function(r) {
        
          if (r) throw r;
          console.log("connected as id " + connection.threadId);
          connection.query(`SELECT COncat(e.first_name, ' ', e.last_name) as employees, r.title, r.salary, concat(m.first_name, ' ', m.last_name) as managers    from employee e inner join   employee m on  m.id =  e.manager_id inner join role_ as r on e.role_id = r.id LIMIT 0, 1000

          `, function(err, res){
            if (err) throw err;
            console.table(res);
            connection.end();
        
      })})
        
      }

    viewDepartment() {
        const connection=this.connection
         connection.connect(function(r) {
          if (r) throw r;
          console.log("connected as id " + connection.threadId);
          connection.query("select * from department", function(err, res){
            if (err) throw err;
            console.table(res);
            connection.end();
        
      })})
      }
      
      viewRole() {
        const connection=this.connection
        connection.connect(function(r) {
          if (r) throw r;
          console.log("connected as id " + connection.threadId);
          connection.query("select * from role_", function(err, res){
            if (err) throw err;
            console.table(res);
            connection.end();
        
      })})
        
      }

    

}


module.exports = viewFunctions

