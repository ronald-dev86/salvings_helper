import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { DbService } from '../db-sqlite/db.service';

@Injectable({
  providedIn: 'root'
})
export class BuyoutService extends CrudService {
  table = 'buyout';
  constructor(databaseService: DbService) {
    super(databaseService);
  }
}
