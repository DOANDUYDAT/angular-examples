import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'home', component: FileUploadComponent },
  { path: 'dynamic-form', component: StudentListComponent },
  { path: 'dynamic-table', component: DynamicTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
