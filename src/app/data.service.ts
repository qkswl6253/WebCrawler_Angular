import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';
import { content } from '../content';
import 'rxjs/add/operator/toPromise';
@Injectable({
    providedIn: 'root'
  }) 
export class dataService{

    private baseUrl = 'api/';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    private datastring : string;
    ytexts: content[];
    constructor(private http: Http) {}
 
    searchYoutube(searchString : string) : Promise<content[]> {
        console.log(searchString);
        this.datastring = this.baseUrl + "youtube/" + searchString;
        console.log(this.datastring);
        return this.http.get(this.datastring)
            .toPromise()
            .then( response => response.json() as content[] )
            .catch(this.handleError);
    }
    playVideo(webloc : string) :any {
       window.open("https://www.youtube.com"+webloc,"_parent","");
    }
    showNews(hrefstring:string):any{
        window.open(hrefstring,"_parent","");
    }

    searchNaver(searchString : string) : Promise<content[]> {
        
        return this.http.get(this.baseUrl+"naver/"+searchString)
            .toPromise()
            .then( response => response.json() as content[] )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error:', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

}

