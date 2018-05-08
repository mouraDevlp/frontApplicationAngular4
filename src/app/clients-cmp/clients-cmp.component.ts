import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-clients-cmp',
  templateUrl: './clients-cmp.component.html',
  styleUrls: ['./clients-cmp.component.css']
})
export class ClientsCmpComponent implements OnInit {

info:any;
comments=[];

commentaire={
  date: null,
  message: ""
}
  constructor( public clientService : ClientService) {
    this.info=clientService.getInfo(); 
    this.comments=clientService.getAllComments();
   }

  ngOnInit() {
  }

  onAddCommentaire(c){
    this.clientService.addComments(c);
    this.commentaire.message="";
    this.comments=this.clientService.getAllComments();
  }

}
