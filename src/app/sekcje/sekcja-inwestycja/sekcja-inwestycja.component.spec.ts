import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaInwestycjaComponent } from './sekcja-inwestycja.component';

describe('SekcjaInwestycjaComponent', () => {
  let component: SekcjaInwestycjaComponent;
  let fixture: ComponentFixture<SekcjaInwestycjaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaInwestycjaComponent]
    });
    fixture = TestBed.createComponent(SekcjaInwestycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
