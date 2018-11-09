import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Posting } from './posting';

@Injectable()
export class PostingService {

    private URL = 'http://127.0.0.1:3000/posting';


    constructor(private http: Http) { }

    getPosts(): Observable<Posting[]> {
        return this.http.get(this.URL + '/findAll')
            .map((response: Response) => response.json().response)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPostById(id): Observable<Posting> {
        return this.http.get(this.URL + '/findById/' + id)
            .map((response: Response) => response.json().response)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}