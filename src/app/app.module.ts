import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { UserformComponent } from './Components/userform/userform.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PipedemoComponent } from './Components/pipedemo/pipedemo.component';
import { EllipsisPipe } from './ellipsis.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserformComponent,
    AboutUsComponent,
    PipedemoComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
