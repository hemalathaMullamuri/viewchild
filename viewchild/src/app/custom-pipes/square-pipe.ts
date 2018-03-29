import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'square'
})
export class SquarePipe implements PipeTransform {
    transform(value) {
        return value * value;
    }
}