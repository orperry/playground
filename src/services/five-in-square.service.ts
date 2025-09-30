import { Injectable } from '@angular/core';

@Injectable()
export class FiveInSquareService {
  public initArrays(): number[][] {
    // Create a 5x5 array filled with random numbers between 1 and 9
    return Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1)
    );
  }
}
