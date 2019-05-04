import { Component } from '@angular/core';
import { User } from './address-cars/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JUJU';
  user : User;
  inputText : string;

  constructor(){
    this.user = new User();
    this.user.name = "Nirmay nivaan";
    this.user.Address = "vijaya T apartment, bellandur";
    this.user.title = "Papa's para";
    this.user.phones = ["8622908520","9836980118"];
  }

}
