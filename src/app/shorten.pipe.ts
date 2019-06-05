import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name : 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 10) {
      return (<String>value).substr(0, 10) + ' ...';
    } else {
      return value;
    }
  }
}
