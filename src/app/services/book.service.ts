import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiurl="https://localhost:7033/api/Book";
  constructor(private http:HttpClient) { }

  getAllBooks():Observable<book[]>{
    return this.http.get<book[]>(this.apiurl);
  }
  getBookById(id:number):Observable<book>{
    return this.http.get<book>(`${this.apiurl}/${id}`);
  }
  addBook(book :Omit<book,'id'>):Observable<book>{
return this.http.post<book>(this.apiurl,book);
  }
}
