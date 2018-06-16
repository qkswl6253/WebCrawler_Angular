import { Component } from '@angular/core';
import { dataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchPage =null;
  isyoutube = null;
  searchString =null;
  contents : any;

  constructor(private dataService: dataService){
    this.contents = null;
  }

  onSubmit(){
    if(this.isyoutube == 1){
      console.log(this.searchString);
      console.log(`i'm youtube`);
      this.searchPage = 'youtube';
      this.dataService.searchYoutube(this.searchString).then( youtubeTexts=> this.contents = youtubeTexts );
    }
    else {
      console.log(this.searchString);
      console.log(`i'm naver`);
      this.searchPage = 'naver';
      this.dataService.searchNaver(this.searchString).then( youtubeTexts=> this.contents = youtubeTexts );
    }
  }

}
