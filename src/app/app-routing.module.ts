import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';

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
    path: 'collections',
    component: TaskViewComponent,
  },
  {
    path: 'collections/:collectionId',
    component: TaskViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
