import { AllUserComponent } from './all-user/all-user.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MyprojectComponent } from './myproject/myproject.component';


const routes: Routes = [
  { path: '', redirectTo: 'myproject', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
{path:'all-user',component:AllUserComponent},
{path:'search/:username',component:SearchComponent},
{path:'footer/:username',component:FooterComponent},
{path:'myproject',component:MyprojectComponent},



];
  
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
