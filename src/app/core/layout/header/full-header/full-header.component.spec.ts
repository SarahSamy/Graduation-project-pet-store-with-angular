import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHeaderComponent } from './full-header.component';

describe('FullHeaderComponent', () => {
  let component: FullHeaderComponent;
  let fixture: ComponentFixture<FullHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
