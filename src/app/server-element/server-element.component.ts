import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;

  constructor() {
    let date = new Date();
    console.log('Constructor ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
    // console.log('Constructor ->', date.getTime());
  }

  ngOnInit() {
    let date = new Date();
    console.log('OnInit ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
    // console.log('OnInit ->', date);
  }

  ngOnChanges(changes: SimpleChanges) {
    let date = new Date();
    console.log('OnChanges ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
    // console.log('OnChanges ->', changes);
  }
  ngDoCheck(){
    let date = new Date();
    console.log('DoCheck ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
  ngAfterContentInit() {
    let date = new Date();
    console.log('AfterContentInit ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
  ngAfterContentChecked() {
    let date = new Date();
    console.log('AfterContentChecked ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
  ngAfterViewInit() {
    let date = new Date();
    console.log('AfterViewInit ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
  ngAfterViewChecked() {
    let date = new Date();
    console.log('AfterViewChecked ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
  ngOnDestroy() {
    let date = new Date();
    console.log('OnDestroy ->', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds());
  }
}
