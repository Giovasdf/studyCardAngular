import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCardsComponent } from './study-cards.component';

describe('StudyCardsComponent', () => {
  let component: StudyCardsComponent;
  let fixture: ComponentFixture<StudyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
