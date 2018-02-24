import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private authService: AuthService) { }

  // emailregex.com
  ngOnInit() {
    this.signUpForm = new FormGroup({
      // primer parametro, valor por defecto
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const {email, password, name, lastname} = this.signUpForm.value;
      const user = new User(email, password, name, lastname);
      this.authService.signup(user).subscribe(
        this.authService.handleError
      );
    }
  }
}
