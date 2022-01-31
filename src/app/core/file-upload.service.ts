import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  async uploadGraphicAsset(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const result = await lastValueFrom(this.http.post('/api/graphic-asset', formData));
    return result;
  }
}
