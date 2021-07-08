import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:any='assets/product.json'
  constructor(private http:HttpClient) { }
  getProductsInfo():Observable<any>{
    return this.http.get(this.baseUrl)
    // [
//       {productid:1,productname:'DairyMilk',productprice:300,productdesc:'product contains 10packets of dairymilk chocolates',productimg:'assets/choco.jpeg'},
//       {productid:2,
//         productname:'kitkat',
//         productprice:250,
//         productdesc:'product contains 20 packets of kitkat chocolates',
//         productimg:'assets/kitkat.webp',},
//         {
//         productid:3,
//     productname:'Snickers',
//     productprice:500,
//     productdesc:'product contains 30 packets of snickers chocolates',
//   productimg:'assets/snickers.jpg',
// },
// {
//   productid:4,
//       productname:'5-Star',
//       productprice:550,
//       productdesc:'product contains 40 packets of snickers chocolates',
//     productimg:'assets/5-Star.jpg'}]
//   }





}
}

