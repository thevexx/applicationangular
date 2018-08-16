import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Tunis,tn&appid=17b1c8913b68544be214a35bf9a3b227');
  }
}
