import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { Observable } from 'rxjs/Rx';
import {About} from './about';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [AboutService],
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about;
  abouts : Array<About> = [];
  constructor(private aboutservice: AboutService) { }

  ngOnInit() {
    this.getAboutData();
  }
  getAboutData() {
    this.about = [];
    //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
    this.aboutservice.getData().subscribe(
      data => { 
        this.about = data,
        console.log('data----> '+ data);
      },
      err => console.error(err),
      () => console.log('done loading about ---> '+ this.about));
    console.log(this.about);
  }
}
