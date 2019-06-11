import { DishesService } from './dishes.service';
import { ServerService } from './server.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appName = this.serverService.getAppName();
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
  responseSuccess = true;
  responseResults;
  sendData = false;
  constructor(
    private serverService: ServerService,
    private dishesService: DishesService
  ) {
    // this.serverService.getServers()
    // .subscribe(
    //   (servers: any[]) => {
    //     this.servers = servers;
    //   },
    //   (error) => console.log(error)
    // );
  }
  ngOnInit() {

  }
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
        (servers: any[]) => {
          this.servers = servers;
        },
        (error) => console.log(error)
      );
  }
  onTest() {
    const data = this.dishesService
      .getDishes()
      .subscribe(
        (dishes) => console.log(dishes),
        (error) => console.log(error)
      );
  }
  onTestSend(data) {
    console.log(data);
    const sendData = {
      title: data,
      description: 'Tratatatat',
      imagePath: 'url'
    };
    this.dishesService.postDishes(sendData)
      .subscribe(
        (response) => {
          this.responseSuccess = this.dishesService.testFunc(response).valid;
          this.responseResults = this.dishesService.testFunc(response).data;
          console.log(this.responseSuccess, this.responseResults);
          this.sendData = true;
          if(this.responseSuccess) {
            setTimeout(() => {
              this.sendData = false;
            }, 3000);
          }
        },
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
