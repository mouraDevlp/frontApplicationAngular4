import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home-cmp.component.html',
  styleUrls: ['./home-cmp.component.css']
})
export class HomeCmpComponent implements OnInit {

contact = {
  name: "mourad",
  tel: "0753385146",
  email: "amani@gmail.com"
}

  constructor() { }

  ngOnInit() {
  }

}
