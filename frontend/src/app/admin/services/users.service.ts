import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/app/enviroment/enviroment';
import { checkToken } from '../interceptors/token.interceptor';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  API_URL =  enviroment.API_URL

  constructor(
    private http:HttpClient,
  ) { }

  getUsers(){
    return this.http.get(`${this.API_URL}/users`,{context: checkToken()});
  }

  getUser(id:string){
    return this.http.get(`${this.API_URL}/users/${id}`,{context: checkToken()});
  }

  createUser(user:any){
    return this.http.post(`${this.API_URL}/auth/register`,user,{context: checkToken()})
  }

  updateUser(user:User,id:string){
    return this.http.post(`${this.API_URL}/users`,user,{context: checkToken()})
  }

  deleteUser(id:string){
    return this.http.delete(`${this.API_URL}/users/${id}`,{context: checkToken()})
  }
}
