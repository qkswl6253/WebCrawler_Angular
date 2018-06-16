import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http'
import { dataService } from './data.service';
import { SearchListComponent } from './search-list/search-list.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
