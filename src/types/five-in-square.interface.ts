export interface FiveInSquareItem {
  value: number;
  isUsed: boolean;
  isSelected: boolean;
}

export type FiveInSquare = FiveInSquareItem[][];

export interface ProductItem {
  product: number;
  isMatched: boolean;
}