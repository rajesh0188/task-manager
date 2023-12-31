import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewCollectionComponent,
    NewTaskComponent,
    EditCollectionComponent,
    EditTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
