import { Component, OnInit } from '@angular/core';
import { FiveInSquareService } from '../../services/five-in-square.service';
import { FiveInSquare, ProductItem } from '../../types/five-in-square.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-five-in-square',
  standalone: true,
  imports: [AsyncPipe, CommonModule, DecimalPipe],
  providers: [FiveInSquareService],
  templateUrl: './five-in-square.component.html',
  styleUrls: ['./five-in-square.component.scss']
})
export class FiveInSquareComponent implements OnInit {
  public matrix$!: Observable<FiveInSquare>;
  public productColumns$!: Observable<ProductItem[]>;
  public productRows$!: Observable<ProductItem[]>;
  public steps$!: Observable<number>;
  public isWin$!: Observable<boolean>;

  constructor(private fiveInSquareService: FiveInSquareService) {}

  ngOnInit(): void {
    this.matrix$ = this.fiveInSquareService.matrix$;
    this.productColumns$ = this.fiveInSquareService.productColumns$;
    this.productRows$ = this.fiveInSquareService.productRows$;
    this.steps$ = this.fiveInSquareService.steps$;
    this.isWin$ = this.fiveInSquareService.isWin$;
  }

  public selectCell(row: number, col: number): void {
    this.fiveInSquareService.selectCell(row, col);
  }
}
