import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Collection } from '../collection-model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
})
export class NewCollectionComponent implements OnInit, AfterViewChecked {
  collectionId!: number;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.collectionId = params['collectionId'];
    });
  }

  ngAfterViewChecked(): void {
    document.getElementById('titleInput')!.focus();
  }

  createCollection(title: string) {
    const id = this.taskService.createCollection(title);
    this.router.navigate(['/collections', id]);
  }

  onCancelClick() {
    this.router.navigate(['/collections', this.collectionId]);
  }
}
