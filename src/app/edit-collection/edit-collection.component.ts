import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Collection } from '../collection-model';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss'],
})
export class EditCollectionComponent implements OnInit, AfterViewChecked {
  collectionId!: number;
  collectionTitle: string = '';

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.collectionId = params['collectionId'];
    });
    this.collectionTitle = this.taskService.getCollectionTitleById(
      this.collectionId
    );
  }

  ngAfterViewChecked(): void {
    document.getElementById('titleInput')!.focus();
  }

  updateCollection(title: string) {
    this.taskService.updateCollection(this.collectionId, title);
    this.router.navigate(['/collections', this.collectionId]);
  }

  onCancelClick() {
    this.router.navigate(['/collections', this.collectionId]);
  }
}
