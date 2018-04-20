import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';

import { UsersComponent } from '../users/users.component';

const notesRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: '',  component: ListNotesComponent },
      { path: 'add', component: AddNoteComponent },
      { path: 'detail/:id', component: DetailNoteComponent }
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
