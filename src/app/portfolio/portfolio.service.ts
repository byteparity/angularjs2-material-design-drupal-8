import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {

  public baseUrl: string = 'http://dev-angularjs2-material-design-drupal-8.pantheonsite.io/';
  public data;
  
  constructor(private http : Http) { }
  
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getArticles() {
    this.data = this.http.get(this.baseUrl+'/api/article', {headers: this.getHeaders()}).map(this.extractData)
                    .catch(this.handleError);
    return this.data;
  }

  getArticle(nid: number){
    if(nid){
      this.data = this.http.get(this.baseUrl+'/api/article/'+nid, {headers: this.getHeaders()}).map(this.extractData)
                    .catch(this.handleError);
      return this.data;
    }    
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
