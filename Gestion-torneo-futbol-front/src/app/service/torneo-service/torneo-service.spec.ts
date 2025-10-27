import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoService } from './torneo-service';

describe('TorneoService', () => {
  let component: TorneoService;
  let fixture: ComponentFixture<TorneoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
