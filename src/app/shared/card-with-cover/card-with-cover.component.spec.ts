import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithCoverComponent } from './card-with-cover.component';

describe('CardWithCoverComponent', () => {
  let component: CardWithCoverComponent;
  let fixture: ComponentFixture<CardWithCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWithCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
