import { Pipe, PipeTransform } from '@angular/core';

// this component implements a custom pipe

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, '');
  }
}
