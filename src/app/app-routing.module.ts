import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'collections',
    pathMatch: 'full',
    // component: TaskViewComponent,
  },
  {
    path: 'new-collection',
    component: NewCollectionComponent,
  },
  {
    path: 'edit-collection/:collectionId',
    component: EditCollectionComponent,
  },
  {
    path: 'collections',
    component: TaskViewComponent,
  },
  {
    path: 'collections/:collectionId',
    component: TaskViewComponent,
  },
  {
    path: 'collections/:collectionId/new-task',
    component: NewTaskComponent,
  },
  {
    path: 'collections/:collectionId/edit-task/:taskId',
    component: EditTaskComponent,
  },
  {
    path: '**',
    redirectTo: 'collections',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
