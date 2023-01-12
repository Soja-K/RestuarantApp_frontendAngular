import { Foods } from "./food"




export class CartItems {
  static quantity: number;
    // quantity: any;
    // food: Foods;
    
    constructor(food:Foods) {
        this.food = food;

    }
       food:Foods;
       quantity:number=1;
       get price():Number{
        return this.food.price*this.quantity;
       }



      

    }
