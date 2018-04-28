import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { WindowRefService } from '../../window-ref.service';

import { NotesService } from '../notes.service';

import { Note } from '../note';
import { FilesService } from '../../files.service';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html'
})
export class DetailNoteComponent implements OnInit {

  private _window: Window;
  note: Note = {id: null, content: '', image: ''};
  noteId;
  @ViewChild('noteImage') image: ElementRef;
  @ViewChild('fileInput') el: ElementRef;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private notesService: NotesService,
    private filesService: FilesService,
    private windowRefService: WindowRefService
  ) { }

  ngOnInit() {
    this._window = this.windowRefService.nativeWindow;
    this.noteId = this.route.snapshot.paramMap.get('id');
    this.getNote(this.noteId);
  }

  getNote(id: number): void {
    this.notesService.getNote(id)
      .subscribe(note => {
        this.note = note;
        this.getImage(this.note.image);
      });
  }

  updateNote(note: Note): void {
    this.notesService.updateNote(note)
      .subscribe(data => this.goBack());
  }

  deleteNote(note: Note): void {
    this.notesService.deleteNote(note)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getImage(imageName: string) {
    this.filesService.getImage(imageName)
      .subscribe(res => {
        this.image.nativeElement.src = this._window.URL.createObjectURL(res);
      });
  }

  fileUpload(event) {
    const file: File = this.el.nativeElement.files[0];
    this.filesService.uploadFile('api/files', file)
      .subscribe(res => {
        this.note.image = res['filename'];
        this.getImage(this.note.image);
      });
  }

}
