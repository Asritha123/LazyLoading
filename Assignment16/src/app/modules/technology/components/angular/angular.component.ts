import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  filter:any='all'
  funnel:any='a-z'
  courses:any =[]
  wcourses:any
  constructor(private webservice:WebService)
  {

}  ngOnInit(): void {
  this.webservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='angular') ? this.courses = val : console.log(-1))
  )
    this.webservice.getAngularInfo().subscribe(
      data => this.wcourses=data,
      error =>console.log(error) )
  }
}
