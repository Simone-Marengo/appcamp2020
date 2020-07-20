import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  public listArray: Array<any> = [];

  constructor() {}

  public addElement(element: any) {
    this.listArray.push(element);
  }
}
