import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalFormComponent } from './add-animal-form.component';

describe('AddAnimalFormComponent', () => {
  let component: AddAnimalFormComponent;
  let fixture: ComponentFixture<AddAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnimalFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
