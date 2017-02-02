import { Injectable } from '@angular/core';
@Injectable()
export class Article {
  id: string;
  title: string = '';
  image: string = '';
  body: string = '';
}