import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGoleadorList } from './estadistica-goleador-list';

describe('EstadisticaGoleadorList', () => {
  let component: EstadisticaGoleadorList;
  let fixture: ComponentFixture<EstadisticaGoleadorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticaGoleadorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaGoleadorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
