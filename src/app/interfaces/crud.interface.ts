export interface ICRUD {
  create (data: any): any;
  find (): any;
  findById (id: number): any;
  update (data: any, id: number): any;
  delete (id: number): any;
}
