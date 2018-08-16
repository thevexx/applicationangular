import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myWeather;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getWeather().subscribe( res => {
      console.log(res.json());
      this.myWeather = res.json();
    });



    console.log('hello from component home' + this.myWeather);
  }

}
