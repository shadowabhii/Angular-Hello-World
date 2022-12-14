import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  //firstName ="";
  //lastName = "";
  //age = 0;

  title = "Fill all the fields below";
  user:User = new User();
  users :User[]=[];
 // UserDetails = {

    // firstName: "",
    // lastName: "",
    // age: 0
  //}

  save() {
   // console.log(this.User.firstName + " " + this.User.lastName+" "+this.User.age +" "+this.User.gender);

   const observable =this.userService.createUser(this.user);
   observable.subscribe(
     (response: any) =>{
       console.log(response)
     },
     function(error){
       console.log(error);
       alert("Something went wrong");
     }
     )
   
  }

  deleteRow(user, index)
  {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response:any)=>
    {
      console.log(response);
      this.users.splice(index,1);
    })
  }

  sort()
  {
    this.users.sort(function(user1,user2)
    {
      return user1.age-user2.age
    })
  }

  sortdesc()
  {
    this.users.sort(function(user1,user2)
    {
      return user2.age-user1.age
    })
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    const promise = this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.users=response as User[];

    }
    )

  }

  

}
