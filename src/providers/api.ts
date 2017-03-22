import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  baseUrl:string = 'https://api.float.com/api/v1';
  api_key: string = '97268581972b576ebf6024ce2932e2367c6239a1';
  headers: any;

  constructor(public http: Http) {

  }

  People() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.api_key);
    console.log(headers);
    this.http.get(this.baseUrl + '/people', {headers: headers})
        .subscribe(data => {
          console.log('data', data);
        }, err => {
          console.log('error', err);
        });
  }

  SetHeaders(){
    this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer' + this.api_key);
  }
}
