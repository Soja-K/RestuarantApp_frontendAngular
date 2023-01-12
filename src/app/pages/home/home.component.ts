import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Foods } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FapiService } from 'src/app/fapi.service';
import { Apis } from 'src/app/shared/models/apis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  apis:Apis[]=[];
  constructor(private fs: OrderDetailsService, private route: ActivatedRoute,private fd:FapiService) { }


  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if (params['searchItem'])
    //     this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
    
    //    else
    //     this.foods = this.fs.getAll();
  
    // })
    this.apis=this.fd.getFood();


  }
}