import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name : 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number, ended: string) {
    if (value.length > limit) {
      return (<String>value).substr(0, limit) + ' ' + ended;
    } else {
      return value;
    }
  }
}
