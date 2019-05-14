import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  urlId = null;
  allowEdit = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.params.subscribe((params: Params) => {
      this.urlId = +params.id;
    });
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(this.urlId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
