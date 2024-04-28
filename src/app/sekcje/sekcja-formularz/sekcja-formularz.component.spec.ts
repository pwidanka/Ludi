import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaFormularzComponent } from './sekcja-formularz.component';

describe('SekcjaFormularzComponent', () => {
  let component: SekcjaFormularzComponent;
  let fixture: ComponentFixture<SekcjaFormularzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaFormularzComponent]
    });
    fixture = TestBed.createComponent(SekcjaFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
