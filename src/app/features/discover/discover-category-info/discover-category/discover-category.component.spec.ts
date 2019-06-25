import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCategoryComponent } from './discover-category.component';

describe('DiscoverCategoryComponent', () => {
  let component: DiscoverCategoryComponent;
  let fixture: ComponentFixture<DiscoverCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
