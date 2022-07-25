import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonThreeComponent } from './person-three.component';

describe('PersonThreeComponent', () => {
  let component: PersonThreeComponent;
  let fixture: ComponentFixture<PersonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
