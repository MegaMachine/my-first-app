import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface Server {
  name: string;
  id: string;
}
@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.scss']
})

export class ServerComponent {
  @Input() item: Server;
  @Output() action = new EventEmitter();

  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): String {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  deleteItem() {
    this.action.emit(this.item);
  }
}
