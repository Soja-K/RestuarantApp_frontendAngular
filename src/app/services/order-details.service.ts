import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  

  constructor() { }

  // getFoodById(id: number):Foods {
  //   return this.getAll().find(food => food.id == id)!;
  // }
  // getAllFoodByTag(tag: string): Foods[] {

  //   return tag == "All" ?
  //     this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));


  //   // if(tag=='All')
  //   // return this.getAll()
  //   // else
  //   // return this.getAll().filter(food=>food.tags?.includes(tag));
  // }

  // getAllTag(): Tag[] {
  //   return [

  //     { name: 'All', count: 14 },
  //     { name: 'FastFood', count: 9 },

  //     { name: 'Lunch', count: 4 },
  //     { name: 'Dinner', count: 2 },
  //     { name: 'Breakfast', count: 5 },
  //     { name: 'HomeilyFood', count: 7 },





  //   ];


  // }

  // getAll(): Foods[] {
  //   return [
  //     {
  //       id: 1,
  //       name: "Pizza pepperoni",
  //       price: 110,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['belgium', 'france'],
  //       star: 3.3,
  //       imageUrl: '/assets/food-1.jpeg',
  //       tags: ['FastFood', 'Snacks'],
  //     },
  //     {
  //       id: 2,
  //       name: "Burger",
  //       price: 100,
  //       cookTime: '10-20',
  //       favorite: true,
  //       origin: ['India', 'Asia'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-2.jpeg',
  //       tags: ['FastFood', 'Snacks'],
  //     },
  //     {
  //       id: 3,
  //       name: "Sandwitch",
  //       price: 80,
  //       cookTime: '15-30',
  //       favorite: false,
  //       origin: ['belgium', 'france'],
  //       star: 3.4,
  //       imageUrl: '/assets/food-3.jpeg',
  //       tags: ['FastFood', 'Breakfast'],
  //     },
  //     {
  //       id: 4,
  //       name: "Momos",
  //       price: 130,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['India', 'Asia'],
  //       star: 4.3,
  //       imageUrl: '/assets/food-4.jpeg',
  //       tags: ['FastFood', 'Snacks'],
  //     },
  //     {
  //       id: 5,
  //       name: "Shawarma",
  //       price: 150,
  //       cookTime: '20-30',
  //       favorite: false,
  //       origin: ['India', 'Asia'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-5.jpeg',
  //       tags: ['FastFood', 'Snacks'],
  //     },
  //     {
  //       id: 6,
  //       name: "Pasta",
  //       price: 140,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['America'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-16.jpeg',
  //       tags: ['FastFood', 'Dinner'],
  //     },
  //     {
  //       id: 7,
  //       name: "Porotta",
  //       price: 60,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['India', 'Asia'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-7.jpeg',
  //       tags: ['FastFood', 'Lunch'],
  //     },
  //     {
  //       id: 8,
  //       name: "Alfam",
  //       price: 140,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Italy'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-8.jpeg',
  //       tags: ['FastFood', 'Lunch'],
  //     },
  //     {
  //       id: 9,
  //       name: "Chappathi",
  //       price: 50,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-9.jpeg',
  //       tags: ['HomeilyFood', 'Dinner'],
  //     },
  //     {
  //       id: 10,
  //       name: "Tomato Rice",
  //       price: 100,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-10.jpeg',
  //       tags: ['HomeilyFood', 'Lunch'],
  //     },
  //     {
  //       id: 11,
  //       name: "Ghee Roast",
  //       price: 80,
  //       cookTime: '10-20',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-11.jpeg',
  //       tags: ['HomeilyFood', 'Breakfast'],
  //     },
  //     {
  //       id: 12,
  //       name: "Masala Roast",
  //       price: 70,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-12.jpeg',
  //       tags: ['HomeilyFood', 'Breakfast'],
  //     },
  //     {
  //       id: 13,
  //       name: "Idli",
  //       price: 40,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-13.jpeg',
  //       tags: ['HomeilyFood', 'Breakfast'],
  //     },
  //     {
  //       id: 14,
  //       name: "Puttu",
  //       price: 50,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-14.jpeg',
  //       tags: ['HomeilyFood', 'Breakfast'],
  //     },
  //     {
  //       id: 15,
  //       name: "Palappam",
  //       price: 60,
  //       cookTime: '20-30',
  //       favorite: true,
  //       origin: ['Indian'],
  //       star: 2.3,
  //       imageUrl: '/assets/food-15.jpeg',
  //       tags: ['HomeilyFood', 'Breakfast'],
  //     },
  //     {
  //       id: 16,
  //       name: "Biryani",
  //       price: 200,
  //       cookTime: '20-30',
  //       favorite: false,
  //       origin: ['India', 'Asia'],
  //       star: 4.5,
  //       imageUrl: '/assets/food-6.jpeg',
  //       tags: ['FastFood', 'Lunch'],

  //     },


  //   ];
  // }










}