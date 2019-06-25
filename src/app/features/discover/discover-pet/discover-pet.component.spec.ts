import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverPetComponent } from './discover-pet.component';

describe('DiscoverPetComponent', () => {
  let component: DiscoverPetComponent;
  let fixture: ComponentFixture<DiscoverPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
