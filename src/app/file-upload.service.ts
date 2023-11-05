import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  SERVER_URL: string = '{Server URL}';

  constructor(private httpClient: HttpClient) {}

  public upload(formData: FormData) {
    console.log(formData);
    return this.httpClient.post<FormData>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
