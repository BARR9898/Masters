import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { checkToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

   API_URL = enviroment.API_URL

  constructor( private http:HttpClient) { }

  upladImage(image_data:any){
    return this.http.post<any[]>(`${this.API_URL}/upload/image`,image_data,{context: checkToken()});
  }
}
