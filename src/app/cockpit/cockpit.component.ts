import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // get access before the methos is called
  // @ViewChild(CockpitComponent) serverContentInput;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // newServerName = '';
  newServerContent = '';
  // serverElements = [];

  onAddServer(nameInput : HTMLInputElement) {
    //passing reference HTML element
    this.serverCreated.emit({
      // serverName : this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  constructor() { }

  ngOnInit() {
  }


}
