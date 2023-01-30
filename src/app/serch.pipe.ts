import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(movies:any[],term:string): any[] {
    return movies.filter(function(onmovie){
      return onmovie.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
