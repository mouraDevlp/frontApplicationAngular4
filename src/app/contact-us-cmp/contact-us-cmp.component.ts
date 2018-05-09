import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ContactUsService } from '../../service/contactUsService';

@Component({
  selector: 'app-contact-us-cmp',
  templateUrl: './contact-us-cmp.component.html',
  styleUrls: ['./contact-us-cmp.component.css']
})
export class ContactUsCmpComponent implements OnInit {
pagePhotos: any;
currentPage: number = 1 ;
size: number = 4 ;
totalPages: number = 1;
pages : Array <number>=[];
motCle : string ="";
  constructor( private contactuservice: ContactUsService) { }

  ngOnInit() {
  }

  onSearsh(dataForm){
    this.contactuservice.onSearsh(this.motCle, this.size, this.currentPage)
    .subscribe( data =>{
      this.pagePhotos=data;
      this.totalPages = data.totalHits/this.size;
      if(data.totalHits% this.size!=0) ++this.totalPages;
      this.pages = new Array (this.totalPages);
    })
  }

  goToPage(i){
    this.currentPage=i+1;
    this.onSearsh( {motCle: this.motCle});
  }

}
