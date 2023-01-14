import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItems } from '../shared/models/CartItems';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

cart!:Cart;
  constructor(private cartService:CartService,private foodService:FoodService,private router:Router)  { 
   
 



    let foods=foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[5]);
    this.setCart();
  }

  ngOnInit(): void {
  //   if (!localStorage.getItem('currentemail')) {
  //   alert('please login first');
  //    this.router.navigateByUrl('');
  //  }
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItems){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItems,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  logout(){
   alert('Are you want to Logout');
    this.router.navigateByUrl('')

    // if (!localStorage.getItem('currentemail')) {
    //   alert('please login first');
    //    this.router.navigateByUrl('');
    // }

    
    
  }
  
  
  
  
  }


