import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
import { Task } from '../users.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {

  taskObj: Task = new Task();

  id1: string = '';
  name1: string = '';
  email1: string = '';
  status1: string = '';
  password1: string = '';


  //default color of status
  color = "grey";

  //params id
  id: any = ''

  //button disable
  isDisabled: boolean = false

  constructor(private http: HttpClient, private route: Router, private service: UserService, private rou: ActivatedRoute) { }

  ngOnInit(): void {
    

    //calling params

    this.id = this.rou.snapshot.params['id']


    if (this.id) {
      this.service.getone(this.rou.snapshot.params['id']).subscribe((result => {
        this.id1 = result.id
        this.name1 = result.name
        this.email1 = result.email
        this.status1 = result.status
        this.password1 = result.password
      }))
    }

    if (this.id) {
      this.isDisabled = true
    }

  }


  //add a user



  add() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    this.taskObj.password = this.password1
    console.log(this.taskObj);

    this.service.addTask(this.taskObj).subscribe(res => {
      alert('added')
      this.route.navigateByUrl('users/userlist')

    }, err => {
      alert('UserId already Exist')
    })

  }




  cancel() {

  }



  // update a user

  update() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    this.taskObj.password = this.password1
    console.log(this.taskObj);
    this.service.updateIt(this.taskObj).subscribe(res => {
      alert('updated')
      this.route.navigateByUrl('users/userlist')
    })
  }


  //fuction to change the colour of status

  backycolor() {
    if (this.status1 == "Active") {
      this.color = "green";
    }
    else {
      this.color = "red"
    }
  }







}


