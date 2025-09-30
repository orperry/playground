import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveInSquareComponent } from './five-in-square.component';

describe('FiveInSquareComponent', () => {
  let component: FiveInSquareComponent;
  let fixture: ComponentFixture<FiveInSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveInSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveInSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
