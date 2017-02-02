import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
  public baseUrl: string = 'http://dev-angularjs2-material-design-drupal-8.pantheonsite.io';
  public data;
  
  constructor(private http : Http) { }
  
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getData() {
    this.data = this.http.get(this.baseUrl+'/api/about', {headers: this.getHeaders()}).map(this.extractData)
                    .catch(this.handleError);;
    //console.log('in getdata ---> '+this.http.get(this.baseUrl+'/node/2?_format=json', {headers: this.getHeaders()}));
    return this.data;
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  private extractData(res: Response) {
    
    let body = res.json();
    console.log('in service res obj ---->'+body);
    //console.log('in service res.json ---->'+body);
    return body;
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
