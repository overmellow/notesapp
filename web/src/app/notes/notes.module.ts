import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule
  ],
  declarations: [
    NotesComponent,
    ListNotesComponent
  ]
})
export class NotesModule { }
