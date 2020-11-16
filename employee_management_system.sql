DROP DATABASE IF EXISTS employee_management_system;

create database employee_management_system;

create table employee_management_system. department (
id int Primary Key,
name varchar(30) );

create table employee_management_system.role_ (
id int Primary Key,
title Varchar(30),
salary decimal,
dempartment_id int );

create table employee_management_system.employee (
id int Primary Key,
first_name Varchar(30),
last_name Varchar(30),
role_id int,
manager_id int);