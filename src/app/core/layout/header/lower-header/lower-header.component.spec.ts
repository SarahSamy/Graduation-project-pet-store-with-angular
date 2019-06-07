import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerHeaderComponent } from './lower-header.component';

describe('LowerHeaderComponent', () => {
  let component: LowerHeaderComponent;
  let fixture: ComponentFixture<LowerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
