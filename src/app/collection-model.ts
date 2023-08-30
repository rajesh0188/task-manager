import { Task } from './task.model';

export class Collection {
  constructor(public id: number, public title: string, public tasks: Task[]) {}
}
