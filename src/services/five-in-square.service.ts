import { Injectable } from '@angular/core';
import { FiveInSquare, ProductItem } from '../types/five-in-square.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FiveInSquareService {
  private productColumns: BehaviorSubject<ProductItem[]> = new BehaviorSubject<ProductItem[]>([]);
  public productColumns$ = this.productColumns.asObservable();

  private productRows: BehaviorSubject<ProductItem[]> = new BehaviorSubject<ProductItem[]>([]);
  public productRows$ = this.productRows.asObservable();

  private matrix: BehaviorSubject<FiveInSquare> = new BehaviorSubject<FiveInSquare>(this.initMatrix());
  public matrix$ = this.matrix.asObservable();

  private initMatrix(): FiveInSquare {
    const numbers = this.initNumbersArrays();
    const masks = this.initMaskArrays();
    const matrix: FiveInSquare = numbers.map((row, i) =>
      row.map((item, j) => ({
        ...item,
        isUsed: masks[i][j]
      }))
    );
    console.log(matrix);
    this.calculateProducts(matrix);
    return matrix;
  }
  
  private initNumbersArrays(): FiveInSquare {
    return Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => ({
      value: Math.floor(Math.random() * 8) + 2,
      isUsed: false,
      isSelected: false
      }))
    );
  }

  private initMaskArrays(): boolean[][] {
    const size = 5;
    const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
    
    // Helper function to count trues in a row
    const getRowCount = (row: number): number => 
      matrix[row].filter(cell => cell).length;

    // Helper function to count trues in a column
    const getColumnCount = (col: number): number => 
      matrix.map(row => row[col]).filter(cell => cell).length;

    // Fill each row ensuring 2-4 trues
    for (let row = 0; row < size; row++) {
      const targetTrues = Math.floor(Math.random() * 3) + 2; // 2-4 trues
      let placedTrues = 0;
      
      // Try placing trues while respecting column constraints
      while (placedTrues < targetTrues) {
        const col = Math.floor(Math.random() * size);
        if (!matrix[row][col] && getColumnCount(col) < 4) {
          matrix[row][col] = true;
          placedTrues++;
        }
      }
    }

    // Validate and fix columns if needed
    for (let col = 0; col < size; col++) {
      const colCount = getColumnCount(col);
      if (colCount < 2) {
        // Add trues to reach minimum
        let added = 0;
        for (let row = 0; row < size && added < (2 - colCount); row++) {
          if (!matrix[row][col] && getRowCount(row) < 4) {
            matrix[row][col] = true;
            added++;
          }
        }
      }
    }

    return matrix;
  }

  private calculateProducts(matrix: FiveInSquare): void {
    const size = 5;
    const rowProducts: ProductItem[] = [];
    const colProducts: ProductItem[] = [];

    // Calculate row products
    for (let i = 0; i < size; i++) {
      let product = 1;
      for (let j = 0; j < size; j++) {
        if (matrix[i][j].isUsed) {
          product *= matrix[i][j].value;
        }
      }
      rowProducts.push({ product, isMatched: false });
    }

    // Calculate column products
    for (let j = 0; j < size; j++) {
      let product = 1;
      for (let i = 0; i < size; i++) {
        if (matrix[i][j].isUsed) {
          product *= matrix[i][j].value;
        }
      }
      colProducts.push({ product, isMatched: false });
    }

    this.productRows.next(rowProducts);
    this.productColumns.next(colProducts);
  }
}
