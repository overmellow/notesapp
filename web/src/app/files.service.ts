import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  uploadFile(url: string, file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return this.httpClient.post(url, formData);
  }

  getImage(imageName): Observable<Blob> {
    return this.httpClient.get('api/files/image?filename=' + imageName, {
      responseType: 'blob'
    });
  }
}
