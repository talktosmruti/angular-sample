import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smruti',
  templateUrl: './smruti.component.html',
  styleUrls: ['./smruti.component.css']
})
export class SmrutiComponent implements OnInit {

  msg1 : String;
  constructor() { 
    setInterval(()=>{
      this.msg1 = new Date().toTimeString();
    },10);
    
  }

  ngOnInit() {
    
  }

}
