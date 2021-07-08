import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-assignment-product',
  templateUrl: './assignment-product.component.html',
  styleUrls: ['./assignment-product.component.css']
})
export class AssignmentProductComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  products:any = []
  constructor(private productservice:ProductService)
  {
   productservice.getProductsInfo().subscribe(
     data => this.products=data,
     error =>console.log(error)


   )
  }



  ngOnInit(): void {


  }

}
