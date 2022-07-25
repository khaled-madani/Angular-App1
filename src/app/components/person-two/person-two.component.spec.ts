import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTwoComponent } from './person-two.component';

describe('PersonTwoComponent', () => {
  let component: PersonTwoComponent;
  let fixture: ComponentFixture<PersonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
