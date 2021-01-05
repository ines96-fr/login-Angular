import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { LoginI } from '../model/LoginI.interface'; 
import { ResponseI } from '../model/ResponseI.interface';
import { Observable } from 'rxjs'



@Injectable({
    providedIn:'root'
})

export class loginService{
    
    url:string = "http://10.10.40.121:3001/print?url=https://www.grupobynsa.com/blog/los-blogs-de-mascotas-que-debes-seguir-si-te-gustan-los-animales/"; 

    constructor(private http:HttpClient){

    }

    ingresarLogin(form:LoginI):Observable<any>{
        return this.http.get('http://10.10.40.121:3001/print?url=https://github.com/amazon-connect/amazon-connect-streams#readme'); 
    }

}