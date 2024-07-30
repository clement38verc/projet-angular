import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-composant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-composant.component.html',
  styleUrl: './register-composant.component.css'
})
export class RegisterComposantComponent {

  // correspond a l'ensemble des valeurs des champs du formulaire sous forme d'objet
  registerForm!: FormGroup;

  // initialisation de l'objet registerForm avec les regles de validation
  constructor(private formBuilder: FormBuilder, private userService: UserService){ // injection du formBuilder dans le constructeur
    this.registerForm = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
    })
  }

  onSubmit(){
    // verifier que le formulaire est valide (les donnees saisies sont valides)
    if(this.registerForm.valid){
      // appel du service adequat
      this.userService.addUser(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Login error', error.error);
        }
      })
    }

  }
}

