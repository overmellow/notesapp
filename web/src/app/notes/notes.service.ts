import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotesService {
  userId;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  getNotes(): Observable<Note[]> {
    this.userId = this.authService.getCurrentUser().id;
    return this.httpClient.get<Note[]>('api/' + this.userId + '/notes');
  }

  getNote(id: number): Observable<Note> {
    this.userId = this.authService.getCurrentUser().id;
    return this.httpClient.get<Note>('api/' + this.userId + '/notes/' + id);
  }

  addNote(note: Note): Observable<Note> {
    this.userId = this.authService.getCurrentUser().id;
    return this.httpClient.post<Note>('api/' + this.userId + '/notes', note, httpOptions);
  }

  updateNote(note: Note): Observable<Note> {
    this.userId = this.authService.getCurrentUser().id;
    const id = typeof note === 'number' ? note : note.id;
    return this.httpClient.put<Note>('api/' + this.userId + '/notes/' + id, note, httpOptions);
  }

  deleteNote(note: Note | number) {
    this.userId = this.authService.getCurrentUser().id;
    const id = typeof note === 'number' ? note : note.id;
    return this.httpClient.delete<Note>('api/' + this.userId + '/notes/' + id,  httpOptions);
  }
}
