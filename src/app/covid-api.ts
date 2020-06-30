import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class covidApi {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }
  getByCountry(country) {
  	return this.http.get(`${this.apiUrl}countries/${country}`);
  }

  getCountry(lat, long) {
  	return this.http.get(`http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=userr23123`);
  }
}