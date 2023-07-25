import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

   public find(id:string): Observable<User>{
   return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user, { responseType: 'text' as 'json' });
  }

  public update(id: string, user: User){
    return this.http.put<User>(`${this.usersUrl}/${id}`, user, { responseType: 'text' as 'json' });
  }

  public delete(id: string) {
  return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }
}
