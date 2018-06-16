import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dataService } from '../data.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() searchType : string;
  @Input() contents : any;
  @Input() searchString : any;
  constructor(private dataService: dataService) { }

  ngOnInit() {
  }
  playVideo(hrefString : string){
    this.dataService.playVideo(hrefString);
  }
  showNews(hrefString:string){
    this.dataService.showNews(hrefString);
  }

}
