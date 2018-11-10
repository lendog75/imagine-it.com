import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTechComponent } from './block-tech.component';

describe('BlockTechComponent', () => {
  let component: BlockTechComponent;
  let fixture: ComponentFixture<BlockTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
