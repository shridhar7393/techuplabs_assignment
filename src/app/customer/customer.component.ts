import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import  data from '../../../src/data.json';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  public selectControl = new FormControl();
  name!: string;
  email!: string;
  dataFetched!: {country: string, region: string}[];
  region: string = '';
  regions!: string[];
  country!: string;
  countries!: any[];
  headers = new HttpHeaders({'Access-Control-Allow-Origin':'localhost:4300'});


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchRegions();
  }

  fetchRegions() {
    // this.http.get('https://api.first.org/data/v1/countries', {headers: this.headers}).subscribe((data: any) => {
    //   console.log();
    //   this.dataFetched = Object.values(data.data);
    //   this.regions = [...new Set(this.dataFetched.map(el => el.region))];
    // });
    this.dataFetched = Object.values(data.data);
    this.regions = [...new Set(this.dataFetched.map(el => el.region))];
  }

  fetchCountries() {
    this.countries = [...new Set(this.dataFetched.filter(el => el.region === this.selectControl.value).map(el => el.country))];
  }

  addCustomer() {
    const customer = {
      name: this.name,
      email: this.email,
      region: this.region
    };

    const customersData = localStorage.getItem('customers');
    const customers = customersData ? JSON.parse(customersData) : [];
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers.filter((el: {}) => Object.keys(el).length !== 0)));

    this.name = '';
    this.email = '';
    this.region = '';
    this.countries = [];
  }
}

