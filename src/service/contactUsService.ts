import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactUsService {
   constructor(public http:Http) { }

   onSearsh(motCle: string, size:number, page:number){
    return this.http.get("https://pixabay.com/api/?key=8939117-9beb4b107bf1689a1cf2c383f&q="+motCle+"&per_page="+size+"&page="+page)
    .map((resp)=>resp.json())
}

}