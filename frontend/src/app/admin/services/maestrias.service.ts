import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/app/enviroment/enviroment';
import { checkToken } from '../interceptors/token.interceptor';
import { Maestria } from '../interfaces/maestria';

@Injectable({
  providedIn: 'root'
})
export class MaestriasService {

  API_URL =  enviroment.API_URL

  constructor(
    private http:HttpClient,
  ) { }

  getMasters(){
    return this.http.get<Maestria[]>(`${this.API_URL}/masters`,{context: checkToken()});
  }

  createMaster(master:Maestria){
    return this.http.post<any>(`${this.API_URL}/masters`,master,{context: checkToken()})
  }

  deleteMaster(id:string){
    return this.http.delete(`${this.API_URL}/masters/${id}`,{context: checkToken()})

  }

  updateMaster(id:string,master:Maestria){
    return this.http.put(`${this.API_URL}/masters/${id}`,master,{context: checkToken()})

  }

  getMaster(id:string){
    return this.http.put(`${this.API_URL}/masters/${id}`,{context: checkToken()})

  }
}
