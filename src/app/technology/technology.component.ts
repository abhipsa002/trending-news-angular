import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  topTechnology: any;

  constructor(private _service:NewsapiserviceService) { }

  ngOnInit(): void {

    this._service.techNews().subscribe((res)=>{
      console.log(res)
      this.topTechnology = res.articles;
    })
  }

}
