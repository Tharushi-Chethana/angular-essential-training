import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MideaItemFormComponent } from './midea-item-form.component';

describe('MideaItemFormComponent', () => {
  let component: MideaItemFormComponent;
  let fixture: ComponentFixture<MideaItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MideaItemFormComponent]
    });
    fixture = TestBed.createComponent(MideaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
