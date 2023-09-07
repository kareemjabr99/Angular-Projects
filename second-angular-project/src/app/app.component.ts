import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: string = 'Intial Value';

  constructor(){
    this.user = new User();
    this.user.name = 'Karim';
    this.user.designation = 'Software Engineer';
    this.user.address = 'a7a street';
    this.user.phone = ['013021030','20130200120'];

  }
}
