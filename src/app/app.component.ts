import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  name ="Abhishek Yadav";
  a=5;
  b=6;
  c=this.a+this.b;
}
