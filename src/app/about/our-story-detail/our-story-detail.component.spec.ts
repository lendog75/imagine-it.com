import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryDetailComponent } from './our-story-detail.component';

describe('OurStoryDetailComponent', () => {
  let component: OurStoryDetailComponent;
  let fixture: ComponentFixture<OurStoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
