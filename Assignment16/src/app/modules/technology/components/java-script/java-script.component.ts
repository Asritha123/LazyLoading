import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  courses:any = []
  jcourse:any
  constructor(private javaservice:JavaService)
  {

}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='javascript') ? this.courses = val : console.log(-1))
  )

       this.javaservice.getJavaScriptInfo().subscribe(
          data => this.jcourse=data,
          error =>console.log(error)
     )
  }

}
