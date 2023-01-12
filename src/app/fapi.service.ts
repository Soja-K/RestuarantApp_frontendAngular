import { Injectable } from '@angular/core';
import { Apis } from './shared/models/apis';



@Injectable({
  providedIn: 'root'
})
export class FapiService {

  constructor() { }
  getFood():Apis[]{
    return[
      {
      id:1,
  name:"Pizza pepperoni",
  price:110,
  cookTime:'20-30',
  favorite:true, 
  origin:['belgium','france'],
  star:3.3,
  imageUrl:'/assets/food-111.jpeg',
  tags:['FastFood','Snacks'],
},
{
  id:2,
  name:"Burger",
  price:100,
  cookTime:'10-20',
  favorite:true,
  origin:['India','Asia'],
  star:2.3,
  imageUrl:'/assets/food-112.jpeg',
  tags:['FastFood','Snacks'],
},
{
  id:3,
  name:"Sandwitch",
  price:80,
  cookTime:'15-30',
  favorite:false,
  origin:['belgium','france'],
  star:3.4,
  imageUrl:'/assets/food-113.jpeg',
  tags:['FastFood','Breakfast'],
},
{
  id:4,
  name:"Momos",
  price:130,
  cookTime:'20-30',
  favorite:true,
  origin:['India','Asia'],
  star:4.3,
  imageUrl:'/assets/food-114.jpeg',
  tags:['FastFood','Snacks'],
},
{
  id:5,
  name:"Shawarma",
  price:150,
  cookTime:'20-30',
  favorite:false,
  origin:['India','Asia'],
  star:2.3,
  imageUrl:'/assets/food-115.jpeg',
  tags:['FastFood','Snacks'],
},
{
  id:6,
  name:"Pasta",
  price:140,
  cookTime:'20-30',
  favorite:true,
  origin:['America'],
  star:2.3,
  imageUrl:'/assets/food-116.jpeg',
  tags:['FastFood','Dinner'],
},
{
  id:7,
  name:"Porotta",
  price:60,
  cookTime:'20-30',
  favorite:true,
  origin:['India','Asia'],
  star:2.3,
  imageUrl:'/assets/food-117.jpeg',
  tags:['FastFood','Lunch'],
},
{
  id:8,
  name:"Alfam",
  price:140,
  cookTime:'20-30',
  favorite:true,
  origin:['Italy'],
  star:2.3,
  imageUrl:'/assets/food-118.jpeg',
  tags:['FastFood','Lunch'],
}
];

}

}