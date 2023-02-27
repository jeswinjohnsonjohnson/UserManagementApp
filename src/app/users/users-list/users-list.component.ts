import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
import { Task } from '../users.model';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  
  details: any = []

  updated: any

  constructor(private Route: Router, private http: HttpClient, private service: UserService) { }

  ngOnInit(): void {

    this.view()

  }


  // Add User

  addUser() {
    this.Route.navigateByUrl('users/userdetails')
  }


  //View all user

  view() {
    this.service.Viewall().subscribe(res => {
      this.details = res
    })
  }


  //Delete a User

  deleteUser(id: any) {
    this.service.Deleteit(id).subscribe(res => {
      alert('deleted')
      this.ngOnInit()
    })

  }


   //Edit  a User

  editUser(id: any) {
    // navigate to the desired URL with the "id" parameter
    this.Route.navigate(['users/userdetails', id]);
  }






}


