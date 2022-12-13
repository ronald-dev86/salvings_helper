import { Component, OnInit } from '@angular/core';
import { DbService } from './services/db-sqlite/db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {
  constructor( private dbService: DbService ){
  }
  ngOnInit() {
    this.dbService.getReadyDB().subscribe(ready=>{
      if(!ready) {return;}
      this.dbService.getSQLTables();
    });
  }

}
