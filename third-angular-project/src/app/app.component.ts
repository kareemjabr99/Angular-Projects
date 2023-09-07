import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // I need TestService
  constructor( /* private svc: TestService, private http: HttpClient */){
    // let svc = new TestService();
    // svc.printToConsole;
    // this.svc.printToConsole("Got The Service!");

  }

  ngOnInit(){
    // let obs = this.http.get('https://api.github.com/users/kareemjabr99');
    // obs.subscribe((response) => console.log(response));
  }
}
