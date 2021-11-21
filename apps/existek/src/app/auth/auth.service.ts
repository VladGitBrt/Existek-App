import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@existek/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userFound!: IUser | undefined;
  constructor(private http: HttpClient) {}
  loginUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3333/api/users');
  }
  registerUser(newUserObj: any) {
    return this.http.post('http://localhost:3333/api/adduser', newUserObj);
  }
}
