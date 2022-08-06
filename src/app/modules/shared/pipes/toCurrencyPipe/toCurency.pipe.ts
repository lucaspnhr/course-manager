import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"toCurency"
})
export class ToCurencyPipe implements PipeTransform{
    transform(value: number) {
        return `$${value.toFixed(2)}`;
    }

}