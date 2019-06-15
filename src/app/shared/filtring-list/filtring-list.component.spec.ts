import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltringListComponent } from './filtring-list.component';

describe('FiltringListComponent', () => {
  let component: FiltringListComponent;
  let fixture: ComponentFixture<FiltringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
