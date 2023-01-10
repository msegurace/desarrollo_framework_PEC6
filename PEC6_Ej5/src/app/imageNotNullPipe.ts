import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name: 'nullimages'
    }
)
export class ImageNotNullPipe implements PipeTransform{
    transform(value: any) {
        if (value === null || value === undefined || value === '') {
            return "assets/images/botella.jpg";
        }
        return value;
    }
}