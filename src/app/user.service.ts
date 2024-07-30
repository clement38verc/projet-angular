import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from './task.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

// methode pour sauvegarder un utilisateur en faisant appel a l'api node js
addUser(user:any): Observable<any>{
    let body = user;
    return this.http.post("http://localhost/backend_api/?url=register", body);
  }

  // methode login qui connecte un user sur le site
  login(user:any): Observable<any>{
    let body = user;
    return this.http.post("http://localhost/backend_api/?url=login", body);
  }


  // methode  pour avoir la liste des taches
  getAllPost(): Observable<any> {
    let token = localStorage.getItem('token');
    console.log(token);
    let header = new HttpHeaders({
      Accept:"application/json",
      Authorization: `Bearer ${token}`,

    });

    return this.http.get('http://localhost/backend_api/?url=tasks',
      {headers: header});
  }


 // methode pour ajouter un post
 saveTask(task: any): Observable<any> {
  let body = task;
  let token = localStorage.getItem('token');
  let headers = new HttpHeaders({
  Accept:"application/json",
  Authorization: `Bearer ${token}`,
  });

  return this.http.post('http://localhost/backend_api/?url=add_task', body ,{headers: headers});
}


/*   // methode pour modifier un post
  updatePost(data:TaskModel):Observable<any>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.post(` http://localhost/backend_api/?url=update_task&id=${id}`, data, { headers: headers });
  }
 */
  // methode pour supprimer un post
  deleteTask(id: number): Observable<any>{
    return this.http.get(` http://localhost/backend_api/?url=remove_task&id=${id}`);
  }

}
