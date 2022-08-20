import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  topBusiness: any;

  constructor(private _service:NewsapiserviceService) { }

  ngOnInit(): void {

    this._service.businessNews().subscribe((res)=>{
      console.log(res)
      this.topBusiness = res.articles;
    })
  }

}
