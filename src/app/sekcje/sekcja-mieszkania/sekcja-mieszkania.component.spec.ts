import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaMieszkaniaComponent } from './sekcja-mieszkania.component';

describe('SekcjaMieszkaniaComponent', () => {
  let component: SekcjaMieszkaniaComponent;
  let fixture: ComponentFixture<SekcjaMieszkaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaMieszkaniaComponent]
    });
    fixture = TestBed.createComponent(SekcjaMieszkaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
