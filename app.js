const inquirer = require("inquirer")
const viewFunctions = require("./viewfunctions.js");
const addFunctions = require("./addfunctions.js");
const updateFunctions = require("./updatefunctions.js");
var view= new viewFunctions
var add=new addFunctions
var update=new updateFunctions
function runProgram () {
  inquirer.prompt([
      {
        type: "list",
        message: "Do you want to add, view or update?",
        name: "action",
        choices: [
        "Add",
        "View",
        "Update Employee Role"

      ]
       }   
    ]).then((answer) => {
    console.log(answer.action)
 if (answer.action === "Add"){
     console.log("Add")
     add.addItem()
     
 } else if (answer.action === "View"){
    console.log("view")
    view.viewItem()
    
 }      
 else if (answer.action === "Update Employee Role"){
    console.log("update")
    update.updateEmployeeRole()
  
 }

  else if(answer.action === "exit") {return}

  else if (answer.action === "find sum"){
   
   sum.findSum()
 
}
 else
 console.log("error")

    }).catch(error => {
      console.log("top level", error);
  })


}

runProgram()