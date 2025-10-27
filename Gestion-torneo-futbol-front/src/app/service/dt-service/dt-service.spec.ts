import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtService } from './dt-service';

describe('DtService', () => {
  let component: DtService;
  let fixture: ComponentFixture<DtService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
