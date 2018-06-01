import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  createServerStatus = "no Server created";
  serverName = '';
  username = ''
  servers = ["Dev", "Production", "Testing"]


  constructor() {
    setTimeout(
      () => {
        this.allowNewserver = true;
      }, 3000);
  }

  ngOnInit() {
  }
  createServer() {
    this.servers.push(this.serverName);
    this.createServerStatus = "server Server created and Server name is " + this.serverName;
    this.serverName = '';
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  submitUsername() {
    this.username = '';
  }

  // Assignment 2
  para = true;
  log = []
  toggleParagraph() {
    this.para = !this.para;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
