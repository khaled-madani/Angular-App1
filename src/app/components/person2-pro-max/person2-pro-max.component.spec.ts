import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person2ProMaxComponent } from './person2-pro-max.component';

describe('Person2ProMaxComponent', () => {
  let component: Person2ProMaxComponent;
  let fixture: ComponentFixture<Person2ProMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Person2ProMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Person2ProMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
