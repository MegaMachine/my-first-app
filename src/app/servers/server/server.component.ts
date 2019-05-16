import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // const id: number = parseInt(this.route.snapshot.params['id'], 10);
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe( (params: Params) => {
    //   this.server = this.serversService.getServer( +params.id) ;
    // });
    this.route.data.subscribe(( data: Data) => {
      this.server = data['server'];
      console.log(this.route);
    });
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
