import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-sekcja-mapa',
  templateUrl: './sekcja-mapa.component.html',
  styleUrls: ['./sekcja-mapa.component.scss'],
})
export class SekcjaMapaComponent {
  center: google.maps.LatLngLiteral = { lat: 54.68749508402743, lng: 18.462725987758155 };
  zoom = 15;
  display!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: 54.68749508402743, lng: 18.462725987758155 }];

  addMarker(event: google.maps.MapMouseEvent) {
    console.log(event, event.latLng?.lat(), event.latLng?.lng())
    this.markerPositions.push(event.latLng!.toJSON());
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }
}
