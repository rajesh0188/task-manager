import { AfterViewChecked, Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Collection } from '../collection-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
})
export class NewCollectionComponent implements AfterViewChecked {
  constructor(private taskService: TaskService, private router: Router) {}

  ngAfterViewChecked(): void {
    document.getElementById('titleInput')!.focus();
  }

  createCollection(title: string) {
    const id = this.taskService.createCollection(title);
    this.router.navigate(['/collections', id]);
  }
}
