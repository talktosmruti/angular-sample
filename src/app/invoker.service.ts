import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvokerService {

  constructor() { }

  printToConsole(name: string){
    console.log('printing from service : '+name);
  }

}
