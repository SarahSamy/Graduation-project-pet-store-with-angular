import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourItemsSliderComponent } from './four-items-slider.component';

describe('FourItemsSliderComponent', () => {
  let component: FourItemsSliderComponent;
  let fixture: ComponentFixture<FourItemsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourItemsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourItemsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
