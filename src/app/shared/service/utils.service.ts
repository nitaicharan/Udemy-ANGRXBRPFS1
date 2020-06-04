import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  range(start: number, end: number) {
    const keys = Array(end).keys(); // Create a IterableIterator<number>
    const array = [...keys];
    return array.map(el => el + start);
  }
}
