import { Injectable } from '@angular/core';
import { ICRUD } from 'src/app/interfaces/crud.interface';
import { DbService } from '../db-sqlite/db.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements ICRUD{

  table: string = null;

  constructor( public databaseService: DbService) {
  }



  async create(data: any) {
    const labels = Object.keys(data);
    const values = Object.values(data);
    const keys: string[] = [];
    for (let i = 0; i < labels.length; i++) {
      keys[i] = '?';
    }
    const sql = `INSERT INTO ${this.table} (${labels.toString()}) VALUES(${keys.toString()});`;
    return await this.databaseService.excuteSql(sql, values);
  }

  async find() {
    const sql = `SELECT * FROM  ${this.table};`;
    return await this.databaseService.excuteSql(sql, []);
  }

  async findById(id: number) {
    const sql = `SELECT * FROM  ${this.table} WHERE  id = ?;`;
    return await this.databaseService.excuteSql(sql, [id]);
  }

  async findByParam(props: string, value: any) {
    const sql = `SELECT * FROM  ${this.table} WHERE  ${props.trim()} = ?;`;
    return await this.databaseService.excuteSql(sql, [value]);
  }

  async findByParamAnd(props: string [], value: string[]) {
    const sql = `SELECT * FROM  ${this.table} WHERE ${props[0].trim()}= ? and ${props[1].trim()}= ?;`;
    return await this.databaseService.excuteSql(sql, value);
  }

  async update(data: any, id: number) {
    return new Error(`Method not implemented. ${data} ${id}`);
  }

  async delete(id: number) {
    return new Error(`Method not implemented. ${id}`);
  }
}
