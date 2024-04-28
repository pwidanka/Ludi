import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaGaleriaComponent } from './sekcja-galeria.component';

describe('SekcjaGaleriaComponent', () => {
  let component: SekcjaGaleriaComponent;
  let fixture: ComponentFixture<SekcjaGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaGaleriaComponent]
    });
    fixture = TestBed.createComponent(SekcjaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
