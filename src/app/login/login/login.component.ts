import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: LoginServiceService) { }

  onSignin(){
    this.authService.singIn(this.form.value);
  }

  ngOnInit(){
    this.form = this.fb.group({ email: ['',Validators.required], senha:['',Validators.required]});
  }
}
