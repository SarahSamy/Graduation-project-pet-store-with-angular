import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRelatedPetsComponent } from './category-related-pets.component';

describe('CategoryRelatedPetsComponent', () => {
  let component: CategoryRelatedPetsComponent;
  let fixture: ComponentFixture<CategoryRelatedPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRelatedPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRelatedPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
