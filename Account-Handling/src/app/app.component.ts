import { Component } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Account-Handling';
  accounts : {name : string , status : string}[] = [];

  constructor(private accountsServices : AccountService){}

  ngOnInit() {
    this.accounts = this.accountsServices.accounts;
  }

}
