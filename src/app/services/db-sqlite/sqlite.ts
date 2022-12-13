import { SQLiteObject  } from '@awesome-cordova-plugins/sqlite';
import { browserDBInstance } from './browser';

// eslint-disable-next-line @typescript-eslint/naming-convention
const db_name = 'sh.data';
export let database: any = null;
export const inityDB = (platform, sqlite, isReadyDb)=>(async ()=>{

  if(!platform.is('cordova')){
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const instance = (<any>window).openDatabase(db_name, '1.0', 'DEV', 5 * 1024 * 1024);
      database = browserDBInstance(instance);
      isReadyDb.next(true);
      return;
  }
    try {
      const instance: SQLiteObject = await sqlite.create({
        name: db_name,
        location: 'default'
      });

      database = instance;
      isReadyDb.next(true);

    } catch (error: any) {
      throw new Error(`error al inicial la basede datos ${error}`);
    }

})();

// eslint-disable-next-line @typescript-eslint/no-shadow
export const runSQL = (database) => (sql, params: string[] )=> (() => {
  console.log(sql);
  database.executeSql(sql, params)
  .then(()=> console.log('run sql OK ...'))
  .catch((error)=>console.log(error));
}
)();
