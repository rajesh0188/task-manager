import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Collection } from '../collection-model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  collections: Collection[] = [];
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collections = this.taskService.getCollection();
    console.info(this.collections);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.info(params);
    });
  }

  createNewCollection() {
    console.info('in createNewCollection()');
  }
}
