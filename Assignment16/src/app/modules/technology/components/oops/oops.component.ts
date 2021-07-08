import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  courses:any = []
  jcourse:any

  constructor(private javaservice:JavaService)
  {

}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='oops') ? this.courses = val : console.log(-1))
  )
  this.javaservice.getOopsInfo().subscribe(
      data => this.jcourse=data,
 )

  }
}
