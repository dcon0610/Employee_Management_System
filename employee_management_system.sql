DROP DATABASE IF EXISTS employee_management_system;

create database employee_management_system;

create table employee_management_system. department (
id int Primary Key auto_increment,
name varchar(30) );

create table employee_management_system.role_ (
id int Primary Key auto_increment,
title Varchar(30),
salary decimal,
department_id int );

create table employee_management_system.employee (
id int Primary Key auto_increment,
first_name Varchar(30),
last_name Varchar(30),
role_id int,
manager_id int);

insert into employee_management_system.employee (first_name, last_name, role_id, manager_id)
values ('Jack', 'Stevens', 1, null),
('David', 'Connell',1, null),
('Joe', 'Citizen',2, 1),
('John', 'Citizen',2, 1),
('John', 'Connell',2, 1),
('James', 'Connell',3, 1),
('Jake', 'Connell',4, 2),
('Jake', 'Jones',5, 2),
('Jake', 'Citizen',6, 2),
('Joel', 'Jones',7, 2),
('Peter', 'Citizen',8, 2);

insert into employee_management_system.role_ (title, salary, department_id)
values ('manager', 160000,1),
('developer', 50000, 1),
('senior developer', 80000, 1),
('recruiter', 75000, 2),
('senior accountant', 80000, 3),
('junior accountant', 65000,3),
('admin', 45000, 4),
('business analyst', 90000, 5);

insert into employee_management_system.department ( name)
values ('programming'),
('HR'),
('accounting'),
('administration'),
('business');