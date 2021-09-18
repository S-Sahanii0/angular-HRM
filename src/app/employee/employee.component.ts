import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any[] = [
    {
        "EmployeeID":1,
        "FirstName": "John",
        "LastName": "Geller",
        "Salary": 20000,
        "DOB": "1999-01-09",
        "Email": "john@gmail.com",
        "Action": "Data Entry"
    }
    ];

    headElements = ['Employee ID', 'First Name', 'Last Name', 'Salary', 'DOB', 'Email', 'Action']



}

