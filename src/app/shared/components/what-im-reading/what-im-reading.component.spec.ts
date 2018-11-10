import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatImReadingComponent } from './what-im-reading.component';

describe('WhatImReadingComponent', () => {
  let component: WhatImReadingComponent;
  let fixture: ComponentFixture<WhatImReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatImReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatImReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
