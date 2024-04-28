import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaGlownaComponent } from './sekcja-glowna.component';

describe('SekcjaGlownaComponent', () => {
  let component: SekcjaGlownaComponent;
  let fixture: ComponentFixture<SekcjaGlownaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaGlownaComponent]
    });
    fixture = TestBed.createComponent(SekcjaGlownaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
