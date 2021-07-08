import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  products:any = []
  constructor(private productservice:ProductService)
  {
   productservice.getProductsInfo().subscribe(
     data => {this.products=data
    console.log(data)},
     error =>console.log(error)


   )
  }



  ngOnInit(): void {


  }

}

