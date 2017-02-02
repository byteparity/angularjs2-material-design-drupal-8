import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdProgressCircleModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app.routing';
import { HtmlPipe } from './html.pipe';
import { CommentsComponent } from './comments/comments.component';
import { AddcommentComponent } from './comments/addcomment/addcomment.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HtmlPipe,
    CommentsComponent,
    AddcommentComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
