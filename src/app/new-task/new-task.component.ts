import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  collectionId!: number;
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.info(params);
      this.collectionId = params['collectionId'];
      console.info(this.collectionId);
    });
  }

  createTask(title: string) {
    this.taskService.addTask(this.collectionId, title);
    this.router.navigate(['/collections', this.collectionId]);
  }
}
