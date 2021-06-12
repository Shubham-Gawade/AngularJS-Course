import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService:LoggingService, private accountsService:AccountService) {

    this.accountsService.statusUpdated.subscribe(
      (status : string ) => alert('New Status : '+status)
    );
   }

  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
  }

}
