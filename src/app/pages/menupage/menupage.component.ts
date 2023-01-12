import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute) { }
  getMenuId:any;
menuData:any;
  ngOnInit(): void {
   

   
   }
  }


