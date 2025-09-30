import { Component } from '@angular/core';
import { FiveInSquareService } from '../../services/five-in-square.service';

@Component({
  selector: 'app-five-in-square',
  standalone: true,
  imports: [],
  providers: [FiveInSquareService],
  templateUrl: './five-in-square.component.html',
  styleUrls: ['./five-in-square.component.scss']
})
export class FiveInSquareComponent {

}
