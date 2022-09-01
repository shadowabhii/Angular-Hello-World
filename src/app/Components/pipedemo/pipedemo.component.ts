import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  employee = {
    name :"Raj",
    BaseSalary:1000,
    JoinedOn:Date.now(),
    Qualification:"B.tech",
    ValueOfPi: 3.148

  }

  constructor() { }

  ngOnInit(): void {
  }

}
