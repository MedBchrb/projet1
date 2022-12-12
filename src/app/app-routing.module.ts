import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './header/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PcComponent } from './pc/pc.component';
import { PhoneComponent } from './phone/phone.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'pc/:id', component: PcComponent},
  {path:'phone/:id', component: PhoneComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
