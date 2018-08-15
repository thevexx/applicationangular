import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myname = 'chehir';

  mylastname = '';

  phones = [{model: 's8 plus', product: 'Samsung', price : 1500},
  {model: 's7 edge', product: 'Samsung', price : 1000},
  {model: 'P8 lite', product: 'Huawei', price : 1200}];

  constructor() { }

  ngOnInit() {
  }

  btnClicked() {
    this.mylastname += '1';
  }

}
