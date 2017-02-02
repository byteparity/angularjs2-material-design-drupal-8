import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Article } from './article';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [PortfolioService]
})
export class ArticleComponent implements OnInit {
  article: Article;
  id : number;
  constructor( private portfolioservice: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getArticle();
  }

  getArticle() {
    //this.article = [];
    //this.about = this.aboutservice.getData().subscribe(data => {this.about = data;});
    this.portfolioservice.getArticle(this.id).subscribe(
      data => { 
        this.article = data,
        console.log('data---->'+data);
      },
      err => console.error(err),
      () => console.log('done loading about ---> '+ this.article));
    console.log(this.article);
  }

}
