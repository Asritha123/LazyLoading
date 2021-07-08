import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  baseUrl1:any='assets/java.json'
  baseUrl2:any='assets/json/oops.json'
  baseUrl3:any='assets/json/jdbc.json'
  baseUrl4:any='assets/json/javascript.json'

  constructor(private http:HttpClient) { }
  getCoursesInfo():Observable<any>{
    return this.http.get(this.baseUrl1)
}
getOopsInfo():Observable<any>{
  return this.http.get(this.baseUrl2)
}
getJdbcInfo():Observable<any>{
  return this.http.get(this.baseUrl3)
}
getJavaScriptInfo():Observable<any>{
  return this.http.get(this.baseUrl4)
}
}

