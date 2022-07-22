import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProComponent } from './person-pro.component';

describe('PersonProComponent', () => {
  let component: PersonProComponent;
  let fixture: ComponentFixture<PersonProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
