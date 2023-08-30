import { Task } from './task.model';

export class Collection {
  constructor(public title: string, public tasks: Task[]) {}
}
