import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipePipe implements PipeTransform {

  transform(value: number): string {
    return `00:00:${(`0${value}`).slice(-2)}`;
  }

}
