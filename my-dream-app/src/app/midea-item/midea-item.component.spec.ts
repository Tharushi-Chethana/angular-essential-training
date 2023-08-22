import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MideaItemComponent } from './midea-item.component';

describe('MideaItemComponent', () => {
  let component: MideaItemComponent;
  let fixture: ComponentFixture<MideaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MideaItemComponent]
    });
    fixture = TestBed.createComponent(MideaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
