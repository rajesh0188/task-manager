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
  filteredTasks: Task[] = [];
  collectionId!: number;
  currentFilter: string = 'all';
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collections = this.taskService.getCollection();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.collectionId = params['collectionId'];
      this.getTasks();
    });
  }

  createNewCollection() {
    console.info('in createNewCollection()');
  }

  onTaskClick(taskId: number, status: string) {
    let newStatus;
    console.info(status);
    if (status === 'not-completed') {
      newStatus = 'completed';
    } else {
      newStatus = 'not-completed';
    }
    console.info(newStatus);
    this.taskService.changeTaskStatus(this.collectionId, taskId, newStatus);
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks(this.collectionId);
    this.filteredTasks = this.tasks.filter((task) => {
      console.info(task);
      if (this.currentFilter === 'all') {
        return task;
      } else {
        return task.status === this.currentFilter;
      }
    });
  }

  onDeleteListClick() {}

  onTaskFilterClick(filter: string) {
    this.currentFilter = filter;
    this.getTasks();
  }
}
