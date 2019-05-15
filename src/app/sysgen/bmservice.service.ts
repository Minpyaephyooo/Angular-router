import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmserviceService {
  getData(){
    return "I am Angular Service";

  }
  constructor() { }

}
