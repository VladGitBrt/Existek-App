import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMusic } from '@existek/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  constructor(private http: HttpClient) {}
  getMusic() {
    return this.http.get<IMusic[]>('http://localhost:3333/api/songs');
  }
}
