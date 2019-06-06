import { ServerService } from './server.service';
import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(
    private serverService: ServerService
  ) { }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (response) => {
          const data = response;
          console.log(response.body);
        },
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
