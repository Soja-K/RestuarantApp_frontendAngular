import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Foods } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/food.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private fs:FoodService,private route: ActivatedRoute) { }
foodData:any;
  ngOnInit(): void {
    // this.foods=this.fs.getAll();
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
   else if(params['tag'])
   this.foods=this.fs.getAllFoodByTag(params['tag'])
       else
        this.foods = this.fs.getAll();
  
    })
           // this.foods=this.fs.getAll();
  }

}
