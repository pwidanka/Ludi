import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sekcja-formularz',
  templateUrl: './sekcja-formularz.component.html',
  styleUrls: ['./sekcja-formularz.component.scss'],
  host: {
    class: 'bg-gray'
  }
})
export class SekcjaFormularzComponent {
  form = this.fb.group({
    imieNazwisko: ['', Validators.required],
    email: ['', Validators.required],
    telefon: ['', Validators.required],
    wiadomosc: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  submit(){
    console.log(this.form);
  }
}
