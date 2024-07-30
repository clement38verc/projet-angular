import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-new-task-composant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-task-composant.component.html',
  styleUrl: './new-task-composant.component.css'
})
export class NewTaskComposantComponent {
   // l'objet formulaire
   postForm!: FormGroup;

   constructor(private formBuilder: FormBuilder, private UserService: UserService){
     this.postForm = this.formBuilder.group({
       task_name: ['', Validators.required],
       description: ['', Validators.required]
     })
   }

   // methode onSubmit exeter au click sur le bouton
   onSubmit(){
    console.log(this.postForm.value);
     // verifier si le formulaire est bien valide
     if(this.postForm.valid){
       // appel de de la methode savePoste definie dans le userService
       this.UserService.saveTask(this.postForm.value).subscribe({
         next: (res) => {
           console.log(res);
         },
         error: (error)=>{
           console.log(error);
         }
       })
     }
   }

 }




