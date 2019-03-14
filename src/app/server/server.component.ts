import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.scss']
})

export class ServerComponent {
  id: Number = 12;
  state: String = 'offline';

  getServerStatus(): String {
    return this.state;
  }
}
