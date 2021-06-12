import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  servers = [
    {
      instanceType : 'medium',
      name : 'Production',
      status : 'stable',
      started : new Date(26,5,2021)
    },
    {
      instanceType : 'large',
      name : 'User database',
      status : 'stable',
      started : new Date(26,5,2021)
    },
    {
      instanceType : 'small',
      name : 'Development Server',
      status : 'offline',
      started : new Date(26,5,2021)
    },
    {
      instanceType : 'small',
      name : 'Testing Environment Server',
      status : 'stable',
      started : new Date(26,5,2021)
    },
    {
      instanceType : 'small',
      name : 'Testing Server',
      status : 'critical',
      started : new Date(26,5,2021)
    }
  ];
  filteredStatus = '';
  getStatusClasses(server : {instanceType : string, name : string, status : string, started : Date}){
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }
}
