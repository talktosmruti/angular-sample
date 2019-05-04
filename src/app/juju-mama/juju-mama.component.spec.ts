import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JujuMamaComponent } from './juju-mama.component';

describe('JujuMamaComponent', () => {
  let component: JujuMamaComponent;
  let fixture: ComponentFixture<JujuMamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JujuMamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JujuMamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
