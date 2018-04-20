import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NotesService } from '../notes.service';

import { Note } from '../note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html'
})
export class ListNotesComponent implements OnInit {
  notes: Note[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes );
  }
}
