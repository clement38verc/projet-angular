import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from "../user.service";
import { TaskModel } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list-composant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-list-composant.component.html',
  styleUrl: './task-list-composant.component.css'
})
export class TaskComponent implements OnInit{

  listpost!:TaskModel[];


  // constructeur
  constructor(private UserService: UserService, private router: ActivatedRoute, private route: Router){}

  // methode declancher au rendu du composant
  ngOnInit(): void {
    this.UserService.getAllPost().subscribe({
      next: (Response) => {
        this.listpost = Response.data;

      },
      error: (error) => {
        console.log(error);
      }
    })
  }
 // methode pour supprimer un post
  DeleteTask(id:number){
    // appel a la methode pour supprimer un post
    this.UserService.deleteTask(id).subscribe({
      next: (response) => {
        this.UserService.getAllPost().subscribe({
          next: (Response) => {
            this.listpost = Response.data;

          },
          error: (error) => {
            console.log(error);
          }
        })
        //console.log(response);
        this.route.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
