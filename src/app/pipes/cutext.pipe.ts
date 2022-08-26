import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutext'
})
export class CutextPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    if(value){
      if(value.length > 130){
        return value.substr(0, 128) + '...';
      }
    }

    return '';
  }

}
