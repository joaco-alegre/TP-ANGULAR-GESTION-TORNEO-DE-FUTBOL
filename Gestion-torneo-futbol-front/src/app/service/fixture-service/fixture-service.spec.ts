import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureService } from './fixture-service';

describe('FixtureService', () => {
  let component: FixtureService;
  let fixture: ComponentFixture<FixtureService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
