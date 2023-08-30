import { Injectable } from '@angular/core';
import { Collection } from './collection-model';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public saveData(key: string, value: Collection[]) {
    localStorage.setItem(key, JSON.stringify({ data: value }));
  }

  public getData(key: string) {
    console.info(localStorage.getItem(key));
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '').data
      : [];
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
