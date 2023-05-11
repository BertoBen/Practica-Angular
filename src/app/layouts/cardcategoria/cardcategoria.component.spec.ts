import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcategoriaComponent } from './cardcategoria.component';

describe('CardcategoriaComponent', () => {
  let component: CardcategoriaComponent;
  let fixture: ComponentFixture<CardcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardcategoriaComponent]
    });
    fixture = TestBed.createComponent(CardcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
