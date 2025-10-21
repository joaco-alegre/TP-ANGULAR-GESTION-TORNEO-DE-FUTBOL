import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGoleadorService } from './estadistica-goleador-service';

describe('EstadisticaGoleadorService', () => {
  let component: EstadisticaGoleadorService;
  let fixture: ComponentFixture<EstadisticaGoleadorService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticaGoleadorService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaGoleadorService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
