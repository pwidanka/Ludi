import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaMapaComponent } from './sekcja-mapa.component';

describe('SekcjaMapaComponent', () => {
  let component: SekcjaMapaComponent;
  let fixture: ComponentFixture<SekcjaMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaMapaComponent]
    });
    fixture = TestBed.createComponent(SekcjaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
