import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticleComponent } from './article/article.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    BrowserModule,
    JsonpModule,
    ArticleComponent,
    ArticlelistComponent
  ],
  providers: [PortfolioService],
  declarations: [PortfolioComponent, ArticlelistComponent, ArticleComponent]
})
export class PortfolioModule { }
