import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArticleComponent } from './portfolio/article/article.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'portfolio'},
{path: 'portfolio', component: PortfolioComponent},
{path: 'article/:id', component: ArticleComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [PortfolioComponent, AboutComponent, ContactComponent, ArticleComponent];