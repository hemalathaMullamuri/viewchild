import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'charcount'
})

export class CharCountPipe implements PipeTransform {
    transform(value: string): string {
        let resultVal = value + ' - ' + value.length;
        return resultVal;
     

    }
}