import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { Collection } from './collection-model';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  collections: Collection[] = this.localService.getData('collection') || [];

  constructor(private localService: LocalService) {}

  createCollection(title: string) {
    this.collections.push(new Collection(this.collections.length, title, []));
    this.syncDataToLocalStorage();
    return this.collections.length - 1;
  }

  getCollection() {
    this.collections = this.localService.getData('collection');
    return this.collections.slice();
  }

  getCollectionTitleById(collectionId: number) {
    const index = this.collections.findIndex((collection) => {
      return collection.id === +collectionId;
    });
    return this.collections[index].title;
  }

  updateCollection(collectionId: number, title: string) {
    const index = this.collections.findIndex((collection) => {
      return collection.id === +collectionId;
    });
    this.collections[index].title = title;
    this.syncDataToLocalStorage();
  }

  deleteCollection(collectionId: number) {
    console.info(collectionId);
    const index = this.collections.findIndex((collection) => {
      return collection.id === +collectionId;
    });
    console.info(index);
    this.collections.slice(index, 1);
    this.syncDataToLocalStorage();
  }

  getTasks(collectionId: number) {
    return this.collections[collectionId].tasks || [];
  }

  addTask(collectionId: number, title: string) {
    const taskId = this.collections[collectionId].tasks.length;
    this.collections[collectionId].tasks.push(
      new Task(taskId, collectionId, title, 'not-completed')
    );
    this.syncDataToLocalStorage();
  }

  deleteTask(collectionId: number, taskId: number) {
    this.collections[collectionId].tasks.splice(taskId, 1);
    this.syncDataToLocalStorage();
  }

  changeTaskStatus(collectionId: number, taskId: number, newStatus: string) {
    this.collections[collectionId].tasks[taskId].status = newStatus;
    this.syncDataToLocalStorage();
  }

  syncDataToLocalStorage() {
    this.localService.saveData('collection', this.collections);
    this.collections = this.localService.getData('collection');
  }
}
