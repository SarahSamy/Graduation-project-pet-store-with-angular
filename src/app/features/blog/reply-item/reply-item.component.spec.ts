import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyItemComponent } from './reply-item.component';

describe('ReplyItemComponent', () => {
  let component: ReplyItemComponent;
  let fixture: ComponentFixture<ReplyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
