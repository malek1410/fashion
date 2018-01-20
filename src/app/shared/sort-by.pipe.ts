import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: any[], vl:string): any[] {
    return (vl=='A') ?items:items.filter(it =>it['pType']==vl);
  }

}
