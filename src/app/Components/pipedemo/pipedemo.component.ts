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
    ValueOfPi: 3.148,
    attendance:98/100,
    aboutEmployee:"Being a good employee is essential in today’s world, especially in these tough economic times when there are many seeking work. Consequently, it is important to keep in mind that no employee is irreplaceable. While hearing many complain these days about his or her job, one just needs to look around and be thankful that they have the means in which to survive and are able to work. There are many who are not only unemployed, but also unable to perform due to illness or a disability. Sometimes when a person is feeling in a mood to complain, they may need to sit back, relax and take a look around in order to appreciate what they have, and learn how to be a good employee."

  }

  constructor() { }

  ngOnInit(): void {
  }

}
