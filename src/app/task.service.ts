import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { Collection } from './collection-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  collections: Collection[] = [];

  constructor() {}

  createCollection(title: string) {
    this.collections.push(new Collection(title, []));
  }

  getCollection() {
    return this.collections.slice();
  }

  deleteCollection(index: number) {
    this.collections.slice(index, 1);
  }

  addTask(collectionId: number, title: string) {
    this.collections[collectionId].tasks.push(new Task(title, 'not-completed'));
  }

  deleteTask(collectionId: number, taskId: number) {
    this.collections[collectionId].tasks.splice(taskId, 1);
  }

  changeTaskStatus(collectionId: number, taskId: number, newStatus: string) {
    this.collections[collectionId].tasks[taskId].status = newStatus;
  }
}
