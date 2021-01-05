import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.components'; 
import {PrincipalComponent} from './principal/principal.component'
import { HeaderComponents } from './components/header/header.components';
import { BodyComponents } from './components/body/body.components'; 
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent, 
    AppComponent,
    HeaderComponents,
    BodyComponents,
    PrincipalComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
