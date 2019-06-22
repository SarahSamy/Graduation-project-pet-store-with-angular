import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router"
import { UserService } from 'src/app/_services/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  erroeMessage: string;
  password: string;
  email: string;
  userService: UserService;


  constructor(private test: UserService, private router: Router) {
    this.userService = test;
  }

  ngOnInit() {
    this.logInForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),

    });
  }
  onSubmit() {

    this.email = (this.logInForm.get('email') as FormControl).value;
    this.password = (this.logInForm.get('password') as FormControl).value;
    this.userService.SearchForUser(this.email, this.password);
    this.logInForm.reset();
    if (this.userService.loginUser) {
      this.router.navigate(['/manage-pets']);
    }
    else{
      this.erroeMessage="invalid username or password please try again !";
    }

  }

}
