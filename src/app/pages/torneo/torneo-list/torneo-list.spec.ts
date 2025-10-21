import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoList } from './torneo-list';

describe('TorneoList', () => {
  let component: TorneoList;
  let fixture: ComponentFixture<TorneoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
