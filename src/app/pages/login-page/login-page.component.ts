import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatButtonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  email = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    const email = this.email.value;
    const password = this.password.value;
    if (email && password) {
      this.authService.login(email, password).then(cred => {
        console.log(cred);
        this.router.navigate(['']);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
