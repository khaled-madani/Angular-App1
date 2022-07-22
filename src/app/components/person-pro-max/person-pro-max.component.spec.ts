import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProMaxComponent } from './person-pro-max.component';

describe('PersonProMaxComponent', () => {
  let component: PersonProMaxComponent;
  let fixture: ComponentFixture<PersonProMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonProMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
