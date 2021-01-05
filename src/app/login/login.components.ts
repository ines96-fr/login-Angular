import {Component} from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { loginService } from '../service/login.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.components.html', 

})

export class LoginComponent{

    iniciarSesion = new FormGroup({
        nick: new FormControl(''),
        password: new FormControl(''),
      });
    constructor(private http:loginService, private router:Router){ 
        
    }

    ingresar(form){
        console.log(form); 
        this.http.ingresarLogin(form)
        .subscribe(data =>{
            // console.log(data.data._token);
            // if(data.status != null){
                
                
            //     localStorage.setItem('token', data.data._token);
            //     this.router.navigate(['home']);
            //     //this.router.navigate(['items'], { relativeTo: this.route });
            // }
        }); 
    }

}