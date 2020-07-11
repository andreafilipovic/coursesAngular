import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription'
})
export class ShortenDescriptionPipe implements PipeTransform {

  transform(value: any): any {
    return value.substr(0, 50) + "..."
  }

}
