import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  topSports: any;

  constructor(private _service:NewsapiserviceService) { }

  ngOnInit(): void {

    this._service.sportsNews().subscribe((res)=>{
      console.log(res)
      this.topSports = res.articles;
    })
  }
}
