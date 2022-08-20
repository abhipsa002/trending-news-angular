import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  topHeadingDisplay: any;

  constructor(private newsApiService:NewsapiserviceService) { }


  ngOnInit(): void {
    this.newsApiService.topHeading().subscribe((res)=>{
      console.log(res);
      this.topHeadingDisplay = res.articles;
    })
  }

}
