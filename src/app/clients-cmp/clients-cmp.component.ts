import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-cmp',
  templateUrl: './clients-cmp.component.html',
  styleUrls: ['./clients-cmp.component.css']
})
export class ClientsCmpComponent implements OnInit {

info={
  nom:"mourad",
  email:"mourad@gmail.com", 
  tel: 78990
}
comments=[
{ date: new Date(),message:"ceci est le commentaire A"},
{ date: new Date(),message:"ceci est le commentaire B"},
{ date: new Date(),message:"ceci est le commentaire C"}
];

commentaire={
  date: null,
  message: ""
}
  constructor() { }

  ngOnInit() {
  }

  onAddCommentaire(c){
    c.date = new Date();
    this.comments.push(c);
    this.commentaire={date: null, message:""};
  }

}
