import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './Components/userform/userform.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'userform',
component:UserformComponent},{path:'aboutus',
component:AboutUsComponent},{path:'home',
component:AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
