import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFligthComponent } from './find-fligth.component';

describe('FindFligthComponent', () => {
  let component: FindFligthComponent;
  let fixture: ComponentFixture<FindFligthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFligthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindFligthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
