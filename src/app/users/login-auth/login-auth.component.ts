import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent {



  login!: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {

    this.login = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })

  }


  //Login authentcation

  LoginTo() {

    this.http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((a: any) => {
        return a.name === this.login.value.name && a.password === this.login.value.password
      })

      if (user) {
        alert("user login succesfull");
        const ForT = user.id
        localStorage.setItem('ForT',ForT)
        console.log(ForT);
        this.login.reset();
        this.router.navigateByUrl('users/userlist')
      } else {
        alert('Invalid Form')
      }

    }, err => {
      alert("server gone wrong")
    })
  }


}

