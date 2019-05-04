import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCarsComponent } from './address-cars.component';

describe('AddressCarsComponent', () => {
  let component: AddressCarsComponent;
  let fixture: ComponentFixture<AddressCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
