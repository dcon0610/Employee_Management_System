The database was set up with the below structure and the code to set it up was saved in employee_management_system_sql. 

* **department**:

  * **id** - INT PRIMARY KEY AUTO INCREMENT
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY AUTO INCREMENT
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY AUTO INCREMENT
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
App.js then was set up and prompts the user with a choice of adding and role/employee/department, viewing the tables or updating an empnloyee. 

All of the functions are in three separate js files: addfunctions.js c ontains all the functions to add to the tables, viewfunctions.js contains all the functions to view the tables and updatefunctions.js contains all the functions to update the role of the employee.  

The bonus was not completed due to competing time constraints. 


The MYSQL package was used to connect to the database and run the queries. 
The inquirer package was used to receive the prompts. 
The console.table ensured that the data was printed out nicely in a readable format. 

a video link showing the working application was submitted. 