import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';  
import { book } from '../../Models/book';

@Component({
  selector: 'app-book-list',
    standalone:true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
books:book[]=[];
isLoading=true;
errorMessage="";

constructor(private bookservices:BookService){}
ngOnInit(): void {
    this.loadBooks();
}
loadBooks():void{
this.isLoading=true;
this.errorMessage='';
this.bookservices.getAllBooks().subscribe({
  next:(data: book[])=>{
    this.books=data;
    this.isLoading=false;
  },error:(err:any)=> {
        this.errorMessage="fail to load data";
        this.isLoading=false;
        console.error(err);
  },
})
}
}
