import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }
  pd="";
  @ Input()product:any={};
  selectedProduct="";
  @Output() e:EventEmitter<any>=new EventEmitter();
  delete(){
    this.e.emit(this.product.id)
  }
  addcart(){
    
  }
  ngOnInit(): void {
  }

}
