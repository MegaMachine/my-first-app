import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicorn'
})
export class UnicornPipe implements PipeTransform {

  transform(value: string): any {
    if ( value === ':unicorn:'){
      return '<img style="width:16px; height:16px" src="https://cdn2.iconfinder.com/data/icons/fashion-44/300/unicorn-fashion-accesories-clothing-128.png">';
    } else {
      return value;
    }
  }

}
