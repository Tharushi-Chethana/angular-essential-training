import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MideaItemListComponent } from './midea-item-list.component';

describe('MideaItemListComponent', () => {
  let component: MideaItemListComponent;
  let fixture: ComponentFixture<MideaItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MideaItemListComponent]
    });
    fixture = TestBed.createComponent(MideaItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
