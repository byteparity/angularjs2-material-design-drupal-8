import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
@Component({
  selector: 'articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css'],
  providers: [PortfolioService]
})
export class ArticlelistComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
