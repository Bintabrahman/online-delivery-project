import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOMEEComponent } from './homee.component';

describe('HOMEEComponent', () => {
  let component: HOMEEComponent;
  let fixture: ComponentFixture<HOMEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOMEEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HOMEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
