import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGoleadorForm } from './estadistica-goleador-form';

describe('EstadisticaGoleadorForm', () => {
  let component: EstadisticaGoleadorForm;
  let fixture: ComponentFixture<EstadisticaGoleadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticaGoleadorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaGoleadorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
