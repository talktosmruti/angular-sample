import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JujuSmrutiComponent } from './juju-smruti.component';

describe('JujuSmrutiComponent', () => {
  let component: JujuSmrutiComponent;
  let fixture: ComponentFixture<JujuSmrutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JujuSmrutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JujuSmrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
