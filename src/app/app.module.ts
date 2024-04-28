import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { SekcjaGlownaComponent } from './sekcje/sekcja-glowna/sekcja-glowna.component';
import { SekcjaInwestycjaComponent } from './sekcje/sekcja-inwestycja/sekcja-inwestycja.component';
import { SekcjaGaleriaComponent } from './sekcje/sekcja-galeria/sekcja-galeria.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SekcjaMieszkaniaComponent } from './sekcje/sekcja-mieszkania/sekcja-mieszkania.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SekcjaFormularzComponent } from './sekcje/sekcja-formularz/sekcja-formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    SekcjaGlownaComponent,
    SekcjaInwestycjaComponent,
    SekcjaGaleriaComponent,
    SekcjaMieszkaniaComponent,
    SekcjaFormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
