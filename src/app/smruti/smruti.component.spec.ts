import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmrutiComponent } from './smruti.component';

describe('SmrutiComponent', () => {
  let component: SmrutiComponent;
  let fixture: ComponentFixture<SmrutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmrutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
