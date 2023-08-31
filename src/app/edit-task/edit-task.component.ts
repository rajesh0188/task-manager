import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit, AfterViewChecked {
  collectionId!: number;
  taskId!: number;
  taskTitle: string = '';
  collectionTitle: string = '';

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.collectionId = params['collectionId'];
      this.taskId = params['taskId'];
    });
    this.taskTitle = this.taskService.getTaskTitleById(
      this.collectionId,
      this.taskId
    );
    this.collectionTitle = this.taskService.getCollectionTitleById(
      this.collectionId
    );
  }

  ngAfterViewChecked(): void {
    document.getElementById('titleInput')!.focus();
  }

  editTask(title: string) {
    this.taskService.updateTask(this.collectionId, this.taskId, title);
    this.router.navigate(['/collections', this.collectionId]);
  }

  onCancelClick() {
    this.router.navigate(['/collections', this.collectionId]);
  }
}
