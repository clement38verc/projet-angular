import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-composant',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-composant.component.html',
  styleUrl: './login-composant.component.css'
})
export class LoginComposantComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userSevice: UserService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }

  // methode faisant appel login definie dans le UserService
  submit(){
    if(this.loginForm.valid){
      this.userSevice.login(this.loginForm.value).subscribe({
        next : (response) => {
          // console.log(response);
          // enregistrer le token dan le localStorage
          localStorage.setItem('token', response.token);
          // console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/')
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }
}


