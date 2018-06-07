import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';
  // serverElements = [];

  onAddServer(){
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    });
  }
  
  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
