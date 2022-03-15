import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopingService } from 'src/app/shoping.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  catch(value:any)
  {
    this.selectedProduct={}
    this.products=this.products.filter((data:any)=>data.id!=value);
  }
  productlist="";
  title="";
  price="";
  products:any=[];
  selectedProduct:any={}
  constructor(private shopingservice:ShopingService,private httpClient:HttpClient) { 
  this.shopingservice.shoping().subscribe(
    (data:any)=>{
      this.products=data;
    },
    (error:any)=>{
      alert("serverdown");
    }
  )
}
view(product:any){
  this.selectedProduct=product;
}
  ngOnInit(): void {
  }

}
