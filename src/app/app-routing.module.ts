import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
 
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  
  {path:'signup',component:SignupComponent},
  {path:'search/:searchItem',component:MenuComponent},
  {path:'tag/:tag',component:MenuComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
