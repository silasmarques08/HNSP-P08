import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from './type';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypeService {

  private typesUrl: string;

  constructor(private http: HttpClient) {
    this.typesUrl = 'http://localhost:8080/types';
  }

  public findAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesUrl);
  }

   public find(id:string): Observable<Type>{
   return this.http.get<Type>(`${this.typesUrl}/${id}`);
  }

  public save(type: Type) {
    return this.http.post<Type>(this.typesUrl, type, { responseType: 'text' as 'json' });
  }

  public update(id: string, type: Type){
    return this.http.put<Type>(`${this.typesUrl}/${id}`, type, { responseType: 'text' as 'json' });
  }

  public delete(id: string) {
  return this.http.delete<Type>(`${this.typesUrl}/${id}`);
  }
}
