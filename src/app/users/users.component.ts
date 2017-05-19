import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<Object>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 

  }

// Make sure these functions are fired when the page load. 
  ngOnInit() {
    this.getUsers();
    console.log('users', this.users);
  }

// Get all users 
  getUsers() {
     this.userService.getUsers().then((resp) => {
      this.users = resp;
     });  
  }
  // Get the user by ID 
  getUserById(id) {
    return this.userService.getUserById(id);
  }

  // To nagivate onto a specific page
  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['user-create']);
  }

//deleting a user 
  deleteUser(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.userService.deleteUser(id).then((resp) => {
      if(resp) {
        this.users = this.users.filter((user) => {
          return user['id'] != id;
        });
        location.reload(true);
      }
    });
  }
  
}
