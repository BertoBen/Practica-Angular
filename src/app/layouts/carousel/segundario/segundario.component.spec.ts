import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundarioComponent } from './segundario.component';

describe('SegundarioComponent', () => {
  let component: SegundarioComponent;
  let fixture: ComponentFixture<SegundarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundarioComponent]
    });
    fixture = TestBed.createComponent(SegundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
