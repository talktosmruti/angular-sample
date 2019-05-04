import { Component, OnInit } from '@angular/core';
import { InvokerService } from 'src/app/invoker.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  userName: string;
  response: any;
  constructor(private svc: InvokerService, private http: HttpClient) {
    svc.printToConsole('niru');
   }

  ngOnInit() {
    
  }

  search(){
    this.invokeGitHubApi(this.userName);
  }

  invokeGitHubApi(userName: string){
    this.http.get('https://jsonplaceholder.typicode.com/todos/'+userName).subscribe((response) => {
      this.response =
      console.log(response)})
  }

}
