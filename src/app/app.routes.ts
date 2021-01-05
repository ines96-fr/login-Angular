import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.components';
import { PrincipalComponent } from './principal/principal.component'; 

const APP_ROUTES: Routes = [

    { path:'login', component: LoginComponent},
    { path:'home', component: PrincipalComponent},
    { path: '**', pathMatch:'full', redirectTo: 'login'},
]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);