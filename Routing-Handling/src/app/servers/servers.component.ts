import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  @ViewChild("name") name : ElementRef;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onReload(){
    this.router.navigate(['servers'],{relativeTo: this.route});
  }

  sendUser(){
    const nameVar = this.name.nativeElement.value;
    this.router.navigate(['/users',nameVar]);
  }
}
