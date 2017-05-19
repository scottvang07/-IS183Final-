import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user: Object;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

//Function that has to load to capture one User ID
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.userService.getUserById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp user', resp);
        this.user = resp;
      });
  }

  // Allows us to update and edit the User information
  updateUser(id, user:Object) {
    console.log('user', user);
    this.userService.updateUser(id, user).then((resp) => {
      console.log('resp', resp);
      if(resp) {
        this.router.navigate(['users']);
      }
    });
  }
  
}
