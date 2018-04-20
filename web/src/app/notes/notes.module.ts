import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesComponent } from './notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesService } from './notes.service';
import { AddNoteComponent } from './add-note/add-note.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule
  ],
  declarations: [
    NotesComponent,
    ListNotesComponent,
    AddNoteComponent,
    DetailNoteComponent
  ],
  providers: [NotesService]
})
export class NotesModule { }
