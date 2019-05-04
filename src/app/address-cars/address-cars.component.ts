import { Component, OnInit, Input } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-address-cars',
  templateUrl: './address-cars.component.html',
  styleUrls: ['./address-cars.component.css']
})
export class AddressCarsComponent implements OnInit {
  @Input("user")user : User ;
  @Input("test")test : string
  isCollapsed : boolean = true;
  constructor() {

  }

  ngOnInit() {
  }

  collapseToggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}
