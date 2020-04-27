import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstcharcateruppercase'
})
export class FirstcharcateruppercasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): any {
    if (!value) {
      return value;
    }
    return value.replace(/\w\S*/g, function (str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  }

}
