import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoForm } from './torneo-form';

describe('TorneoForm', () => {
  let component: TorneoForm;
  let fixture: ComponentFixture<TorneoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
