import { Component, OnInit } from '@angular/core';

import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-html5',
  templateUrl: './html5.component.html',
  styleUrls: ['./html5.component.css']
})
export class Html5Component implements OnInit {

  filter:any='all'
  funnel:any='a-z'
  courses:any = []
  wcourses:any
  constructor(private webservice:WebService)
  {

}  ngOnInit(): void {
  this.webservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.id=='html5') ? this.courses = val : console.log(-1))
  )

    this.webservice.getHtmlInfo().subscribe(
      data => this.wcourses=data,
      error =>console.log(error))

  }
}
