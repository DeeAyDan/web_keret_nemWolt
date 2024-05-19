import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private location: Location, private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.signUpForm.invalid){
      alert('Nem megfelelő adatok!');
      return;
    }

    if(this.signUpForm.get('email')?.value === ''){
      alert('Az email cím nem lehet üres!');
      return;
    }

    if(this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmPassword')?.value){
      alert('A jelsyavak nem egyeznek!');
      return;
    }

    const passwordCheck = this.signUpForm.get('password')?.value;
    if(passwordCheck && passwordCheck.length < 6){
      alert('A jelszónak legalább 6 karakter hosszúnak kell lennie!');
      return;
    }

    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    if (email && password) {
      this.authService.register(email, password).then(cred => {
        console.log(cred);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  goBack(){
    this.location.back();
  }
}
