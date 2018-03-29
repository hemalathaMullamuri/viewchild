import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'greetings'
})

export class GreetingPipe implements PipeTransform {
    transform(value: string, beforeStr: string, afterStr: string): string {
        let resultVal = beforeStr + ' ' + value + ' ' + afterStr;
        return resultVal;
     

    }
}