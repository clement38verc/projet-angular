import { Routes } from '@angular/router';
import { RegisterComposantComponent } from './register-composant/register-composant.component';
import { LoginComposantComponent } from './login-composant/login-composant.component';
import { NewTaskComposantComponent } from './new-task-composant/new-task-composant.component';
import { TaskComponent } from './task-list-composant/task-list-composant.component';

export const routes: Routes = [
  {path: "login", component: LoginComposantComponent},
  {path: "register", component: RegisterComposantComponent},
  {path: "new-task", component:NewTaskComposantComponent},
  {path:"", component: TaskComponent}


];
