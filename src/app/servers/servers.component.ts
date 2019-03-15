import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false;
  serverCreationStatus: String = 'No server was created!';
  serverName: String = 'TestServer';
  serverId: String = Date.now().toString();
  serverCreated: Boolean = false;
  servers: any = [{ name: this.serverName, id: this.serverId}];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverId = Date.now().toString();
    this.servers.push({
      name: this.serverName,
      id: this.serverId
    });
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  deleteServer(item){
    this.servers.splice(this.servers.indexOf(item),1);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
