import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTechComponent } from './our-tech.component';

describe('OurTechComponent', () => {
  let component: OurTechComponent;
  let fixture: ComponentFixture<OurTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
