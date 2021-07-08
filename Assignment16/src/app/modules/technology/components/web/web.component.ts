import { Component, OnInit} from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {


  filter:any='all'
  funnel:any='a-z'


  courses1:any = []
  constructor(private webservice:WebService)
  {
    webservice.getCoursesInfo().subscribe(
      data => this.courses1=data,
      error =>console.log(error))

  
   }

  ngOnInit(): void {
  }

}
