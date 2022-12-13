import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx/index';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { inityDB, database, runSQL } from './sqlite';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  isReadyDb: BehaviorSubject <boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private http: HttpClient) {
      inityDB( this.platform, this.sqlite, this.isReadyDb);
    }

    getReadyDB(){
      return this.isReadyDb.asObservable();
    }

    async getSQLTables(): Promise<void>{
      try {
        const sql = await this.http.get('assets/sql/tables_local_hs.sql', { responseType: 'text'}).toPromise();
        if(this.platform.is('cordova')){
          await this.sqlitePorter.importSqlToDb(database, sql);
        }else{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const array_sql= sql.split(';');
          array_sql.forEach(element => {
            runSQL(database)(`${element};`,[]);
          });
        }

      } catch (error) {
        throw new Error(`Error en la consulta archivo sql ${error}`);
      }

    }

    async excuteSql(sql, params){
      console.log(sql, params);
      return runSQL(database)(sql,params);
    }

    async getItemByID(): Promise<any>{
      return;
    }

    async getList(): Promise<any[]> {
      return [];
    }

    async getListByID(): Promise<any[]>{
      return[];
    }

    async updateItem(): Promise<any>{
      return;
    }

    async deleteItem(): Promise<string>{
      return '';
    }
}
