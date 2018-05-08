import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
   constructor() { }

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

  addComments(c){
    c.date = new Date();
      this.comments.push(c);
  }
  getAllComments(){
      return this.comments;
  }
  getInfo(){
      return this.info;
  }
}