import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx/index';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { DbService } from './services/db-sqlite/db.service';
import { HttpClientModule } from '@angular/common/http';
import { BuyoutService } from './services/buyout/buyout.service';
import { CrudService } from './services/crud/crud.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    SQLite,
    SQLitePorter,
    DbService,
    BuyoutService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
