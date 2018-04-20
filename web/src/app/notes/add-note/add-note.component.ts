import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

import { WindowRefService } from '../../window-ref.service';

import { NotesService } from '../notes.service';
import { Note } from '../note';
import { FilesService } from '../../files.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html'
})
export class AddNoteComponent implements OnInit {

  private _window: Window;
  model = new Note();
  @ViewChild('fileInput') el: ElementRef;
  @ViewChild('noteImage') image: ElementRef;

  constructor(
    private location: Location,
    private notesService: NotesService,
    private filesService: FilesService,
    private windowRefService: WindowRefService
  ) { }

  ngOnInit() {
    this._window = this.windowRefService.nativeWindow;
  }

  onSubmit() {
    const tempNote = { 'id': null, 'content': this.model.content, 'image': this.model.image };

    this.notesService.addNote(tempNote)
      .subscribe(user => { this.goBack(); } );
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
        console.log(res);
        this.model.image = res['filename'];
        this.getImage(this.model.image);
      });
  }
}
