import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'
  courses:any =[]
  wcourses:any
  constructor(private webservice:WebService)
  {

}  ngOnInit(): void {
  this.webservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='aws') ? this.courses = val : console.log(-1))
  )


    this.webservice.getAwsInfo().subscribe(
      data => this.wcourses=data,
      error =>console.log(error))
  }
}
