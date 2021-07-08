import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {


  baseUrl:any='assets/web.json'
  baseUrl1:any='assets/json/angular1.json'
  baseUrl2:any='assets/json/aws.json'
  baseUrl3:any='assets/json/html.json'

  constructor(private http:HttpClient) { }
  getCoursesInfo():Observable<any>{
    return this.http.get(this.baseUrl)
}
getAngularInfo():Observable<any>{
  return this.http.get(this.baseUrl1)
}
getAwsInfo():Observable<any>{
  return this.http.get(this.baseUrl2)
}
getHtmlInfo():Observable<any>{
  return this.http.get(this.baseUrl3)
}
}
