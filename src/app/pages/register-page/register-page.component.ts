import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})

export class RegisterComponent implements OnInit {
  
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    })
  });

  constructor(private location: Location) {}

  ngOnInit(): void {
    
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }
}
