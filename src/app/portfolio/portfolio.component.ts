import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Article } from './article/article';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  providers: [PortfolioService],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  articles : Array<Article> = [];
  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit() {
    this.getArticleData();
  }
  getArticleData() {
    this.articles = [];
    //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
    this.portfolioservice.getArticles().subscribe(
      data => {
        this.articles = data;
      },
      err => console.error(err),
    );
    //console.log(this.articles);
  }

}
