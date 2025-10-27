import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorService } from './jugador-service';

describe('JugadorService', () => {
  let component: JugadorService;
  let fixture: ComponentFixture<JugadorService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadorService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
