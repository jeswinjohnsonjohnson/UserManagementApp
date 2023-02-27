import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './users.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceURL : string ;

  constructor(private http:HttpClient) { 

    //api url

    this.serviceURL = "http://localhost:3000/user"
  }

 
  //add a user

  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }


  //view all user

  Viewall():Observable<Task>{
    return this.http.get<Task>(this.serviceURL)
  }


 //delete a user

  Deleteit(id:any):Observable<any>{
    return this.http.delete<any>(this.serviceURL+'/'+id)

  }
  

  //get a user
 
  getone(id:any):Observable<any>{
    return this.http.get<any>(this.serviceURL+'/'+id)

  }
  
  //update a user

  updateIt(task:Task):Observable<Task>{
    return this.http.patch<Task>(this.serviceURL+'/'+task.id,task)

  }

 



}

