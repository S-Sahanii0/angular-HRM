import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  showEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // elements: any[] = [
  //   {
  //     "EmployeeID": 1,
  //     "FirstName": "John",
  //     "LastName": "Geller",
  //     "Salary": 20000,
  //     "DOB": "1999-01-09",
  //     "Email": "john@gmail.com",
  //     "Action": "Update"
  //   }
  // ];

  headElements = ['Employee ID', 'First Name', 'Last Name', 'Salary', 'DOB', 'Email']

  empList:Employee[] = [
   
    { id: 1, firstName: 'John', lastName: 'Doe', salary: "1000", dob: new DatePipe('en').transform(Date.now(), 'dd/MM/yyyy'), email: 'john@gmail.com'},
    { id: 2, firstName: 'Lex', lastName: 'Geller', salary: "2000", dob: new DatePipe('en').transform(Date.now(), 'dd/MM/yyyy'), email: 'lex@gmail.com'},
    { id: 3, firstName: 'Koga', lastName: 'Im', salary: "5000", dob: new DatePipe('en').transform(Date.now(), 'dd/MM/yyyy'), email: 'koga@gmail.com'},
    { id: 4, firstName: 'Adam', lastName: 'Bachman', salary: "10000", dob: new DatePipe('en').transform(Date.now(), 'dd/MM/yyyy'), email: 'adam@gmail.com'}
  ]
  

    
  // updateEmp() {
  //   this.showEdit = false;
  // }

  // editEmp() {
  //   this.showEdit = true;
  // }

 
   
}

interface Student{
  id: number,
}

