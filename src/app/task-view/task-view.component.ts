import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Collection } from '../collection-model';
import { Task } from '../task.model';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  collections: Collection[] = [];
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collections = this.taskService.getCollection();
    console.info(this.collections);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.info(params);
      this.tasks = this.taskService.getTasks(params['collectionId']);
      console.info(this.tasks);
    });
  }

  createNewCollection() {
    console.info('in createNewCollection()');
  }
}
