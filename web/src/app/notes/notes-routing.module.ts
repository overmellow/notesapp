import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

const notesRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: '',  component: ListNotesComponent },
      // { path: 'add', component: AddUserComponent },
      // { path: 'detail/:id', component: DetailUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(notesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotesRoutingModule { }
