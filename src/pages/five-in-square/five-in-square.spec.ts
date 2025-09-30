import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveInSquare } from './five-in-square';

describe('FiveInSquare', () => {
  let component: FiveInSquare;
  let fixture: ComponentFixture<FiveInSquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveInSquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveInSquare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
