import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGoleadorDetails } from './estadistica-goleador-details';

describe('EstadisticaGoleadorDetails', () => {
  let component: EstadisticaGoleadorDetails;
  let fixture: ComponentFixture<EstadisticaGoleadorDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticaGoleadorDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaGoleadorDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
