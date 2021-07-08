import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-jdbc',
  templateUrl: './jdbc.component.html',
  styleUrls: ['./jdbc.component.css']
})
export class JdbcComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'
  courses:any = []
  jcourse:any
  constructor(private javaservice:JavaService)
  {

}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='jdbc') ? this.courses = val : console.log(-1))
  )

this.javaservice.getJdbcInfo().subscribe(
    data => this.jcourse=data,
    error =>console.log(error)


  )
  }
}
