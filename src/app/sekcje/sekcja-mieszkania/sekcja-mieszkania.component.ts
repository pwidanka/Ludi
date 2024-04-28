import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginatorIntl } from '@angular/material/paginator';

const polishRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 z ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} z ${length}`;
};

export function getPolishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = '';
  paginatorIntl.nextPageLabel = 'Następny';
  paginatorIntl.previousPageLabel = 'Poprzedni';
  paginatorIntl.getRangeLabel = polishRangeLabel;

  return paginatorIntl;
}

export interface IMieszkanie {
  numer: number;
  pokoje: number;
  powierzchnia: number;
  pietro: number;
  status: string;
}

const mieszkania = [
  { numer: 1, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 2, pokoje: 2, powierzchnia: 50, pietro: 1, status: 'rezerwacja' },
  { numer: 3, pokoje: 4, powierzchnia: 90, pietro: 2, status: 'sprzedane' },
  { numer: 4, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'dostępne' },
  { numer: 5, pokoje: 3, powierzchnia: 80, pietro: 3, status: 'dostępne' },
  { numer: 6, pokoje: 2, powierzchnia: 65, pietro: 4, status: 'dostępne' },
  { numer: 7, pokoje: 4, powierzchnia: 95, pietro: 0, status: 'rezerwacja' },
  { numer: 8, pokoje: 1, powierzchnia: 40, pietro: 0, status: 'dostępne' },
  { numer: 9, pokoje: 3, powierzchnia: 70, pietro: 2, status: 'dostępne' },
  { numer: 10, pokoje: 2, powierzchnia: 55, pietro: 2, status: 'dostępne' },
  { numer: 11, pokoje: 4, powierzchnia: 85, pietro: 1, status: 'dostępne' },
  { numer: 12, pokoje: 1, powierzchnia: 45, pietro: 0, status: 'rezerwacja' },
  { numer: 13, pokoje: 3, powierzchnia: 60, pietro: 1, status: 'sprzedane' },
  { numer: 14, pokoje: 2, powierzchnia: 70, pietro: 3, status: 'dostępne' },
  { numer: 15, pokoje: 4, powierzchnia: 100, pietro: 3, status: 'dostępne' },
  { numer: 16, pokoje: 1, powierzchnia: 50, pietro: 0, status: 'dostępne' },
  { numer: 17, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'rezerwacja' },
  { numer: 18, pokoje: 2, powierzchnia: 80, pietro: 4, status: 'dostępne' },
  { numer: 19, pokoje: 4, powierzchnia: 95, pietro: 4, status: 'dostępne' },
  { numer: 20, pokoje: 1, powierzchnia: 30, pietro: 4, status: 'rezerwacja' },
  { numer: 21, pokoje: 3, powierzchnia: 65, pietro: 0, status: 'dostępne' },
  { numer: 22, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'dostępne' },
  { numer: 23, pokoje: 4, powierzchnia: 85, pietro: 3, status: 'dostępne' },
  { numer: 24, pokoje: 1, powierzchnia: 40, pietro: 0, status: 'sprzedane' },
  { numer: 25, pokoje: 3, powierzchnia: 70, pietro: 0, status: 'dostępne' },
  { numer: 26, pokoje: 2, powierzchnia: 50, pietro: 0, status: 'dostępne' },
  { numer: 27, pokoje: 4, powierzchnia: 90, pietro: 0, status: 'dostępne' },
  { numer: 28, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'rezerwacja' },
  { numer: 29, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 30, pokoje: 2, powierzchnia: 60, pietro: 2, status: 'dostępne' },
  { numer: 31, pokoje: 4, powierzchnia: 80, pietro: 1, status: 'dostępne' },
  { numer: 32, pokoje: 1, powierzchnia: 45, pietro: 1, status: 'dostępne' },
  { numer: 33, pokoje: 3, powierzchnia: 85, pietro: 0, status: 'sprzedane' },
  { numer: 34, pokoje: 2, powierzchnia: 70, pietro: 2, status: 'dostępne' },
  { numer: 35, pokoje: 4, powierzchnia: 100, pietro: 4, status: 'rezerwacja' },
  { numer: 36, pokoje: 1, powierzchnia: 50, pietro: 4, status: 'dostępne' },
  { numer: 37, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 38, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'dostępne' },
  { numer: 39, pokoje: 4, powierzchnia: 90, pietro: 0, status: 'dostępne' },
  { numer: 40, pokoje: 1, powierzchnia: 40, pietro: 0, status: 'sprzedane' },
  { numer: 41, pokoje: 3, powierzchnia: 70, pietro: 0, status: 'dostępne' },
  { numer: 42, pokoje: 2, powierzchnia: 60, pietro: 0, status: 'dostępne' },
  { numer: 43, pokoje: 4, powierzchnia: 80, pietro: 0, status: 'dostępne' },
  { numer: 44, pokoje: 1, powierzchnia: 45, pietro: 4, status: 'rezerwacja' },
  { numer: 45, pokoje: 3, powierzchnia: 85, pietro: 0, status: 'dostępne' },
  { numer: 46, pokoje: 2, powierzchnia: 70, pietro: 2, status: 'dostępne' },
  { numer: 47, pokoje: 4, powierzchnia: 100, pietro: 0, status: 'dostępne' },
  { numer: 48, pokoje: 1, powierzchnia: 50, pietro: 0, status: 'rezerwacja' },
  { numer: 49, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 50, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'dostępne' },
  { numer: 51, pokoje: 4, powierzchnia: 90, pietro: 1, status: 'dostępne' },
  { numer: 52, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'sprzedane' },
  { numer: 53, pokoje: 3, powierzchnia: 70, pietro: 2, status: 'dostępne' },
  { numer: 54, pokoje: 2, powierzchnia: 60, pietro: 3, status: 'dostępne' },
  { numer: 55, pokoje: 4, powierzchnia: 80, pietro: 0, status: 'dostępne' },
  { numer: 56, pokoje: 1, powierzchnia: 45, pietro: 0, status: 'dostępne' },
  { numer: 57, pokoje: 3, powierzchnia: 85, pietro: 4, status: 'rezerwacja' },
  { numer: 58, pokoje: 2, powierzchnia: 70, pietro: 4, status: 'dostępne' },
  { numer: 59, pokoje: 4, powierzchnia: 100, pietro: 0, status: 'dostępne' },
  { numer: 60, pokoje: 1, powierzchnia: 50, pietro: 0, status: 'dostępne' },
  { numer: 61, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 62, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'rezerwacja' },
  { numer: 63, pokoje: 4, powierzchnia: 90, pietro: 1, status: 'dostępne' },
  { numer: 64, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'dostępne' },
  { numer: 65, pokoje: 3, powierzchnia: 70, pietro: 0, status: 'sprzedane' },
  { numer: 66, pokoje: 2, powierzchnia: 60, pietro: 1, status: 'dostępne' },
  { numer: 67, pokoje: 4, powierzchnia: 80, pietro: 1, status: 'dostępne' },
  { numer: 68, pokoje: 1, powierzchnia: 45, pietro: 0, status: 'dostępne' },
  { numer: 69, pokoje: 3, powierzchnia: 85, pietro: 0, status: 'dostępne' },
  { numer: 70, pokoje: 2, powierzchnia: 70, pietro: 0, status: 'rezerwacja' },
  { numer: 71, pokoje: 4, powierzchnia: 100, pietro: 0, status: 'dostępne' },
  { numer: 72, pokoje: 1, powierzchnia: 50, pietro: 0, status: 'dostępne' },
  { numer: 73, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 74, pokoje: 2, powierzchnia: 55, pietro: 2, status: 'sprzedane' },
  { numer: 75, pokoje: 4, powierzchnia: 90, pietro: 0, status: 'dostępne' },
  { numer: 76, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'dostępne' },
  { numer: 77, pokoje: 3, powierzchnia: 70, pietro: 3, status: 'dostępne' },
  { numer: 78, pokoje: 2, powierzchnia: 60, pietro: 0, status: 'dostępne' },
  { numer: 79, pokoje: 4, powierzchnia: 80, pietro: 0, status: 'rezerwacja' },
  { numer: 80, pokoje: 1, powierzchnia: 45, pietro: 0, status: 'dostępne' },
  { numer: 81, pokoje: 3, powierzchnia: 85, pietro: 4, status: 'dostępne' },
  { numer: 82, pokoje: 2, powierzchnia: 70, pietro: 0, status: 'dostępne' },
  { numer: 83, pokoje: 4, powierzchnia: 100, pietro: 0, status: 'dostępne' },
  { numer: 84, pokoje: 1, powierzchnia: 50, pietro: 2, status: 'sprzedane' },
  { numer: 85, pokoje: 3, powierzchnia: 75, pietro: 0, status: 'dostępne' },
  { numer: 86, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'dostępne' },
  { numer: 87, pokoje: 4, powierzchnia: 90, pietro: 0, status: 'rezerwacja' },
  { numer: 88, pokoje: 1, powierzchnia: 35, pietro: 4, status: 'dostępne' },
  { numer: 89, pokoje: 3, powierzchnia: 70, pietro: 0, status: 'dostępne' },
  { numer: 90, pokoje: 2, powierzchnia: 60, pietro: 4, status: 'dostępne' },
  { numer: 91, pokoje: 4, powierzchnia: 80, pietro: 1, status: 'dostępne' },
  { numer: 92, pokoje: 1, powierzchnia: 45, pietro: 0, status: 'rezerwacja' },
  { numer: 93, pokoje: 3, powierzchnia: 85, pietro: 0, status: 'dostępne' },
  { numer: 94, pokoje: 2, powierzchnia: 70, pietro: 2, status: 'dostępne' },
  { numer: 95, pokoje: 4, powierzchnia: 100, pietro: 2, status: 'dostępne' },
  { numer: 96, pokoje: 1, powierzchnia: 50, pietro: 0, status: 'dostępne' },
  { numer: 97, pokoje: 3, powierzchnia: 75, pietro: 3, status: 'dostępne' },
  { numer: 98, pokoje: 2, powierzchnia: 55, pietro: 0, status: 'dostępne' },
  { numer: 99, pokoje: 4, powierzchnia: 90, pietro: 4, status: 'sprzedane' },
  { numer: 100, pokoje: 1, powierzchnia: 35, pietro: 0, status: 'dostępne' }
];

@Component({
  selector: 'app-sekcja-mieszkania',
  templateUrl: './sekcja-mieszkania.component.html',
  styleUrls: ['./sekcja-mieszkania.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useValue: getPolishPaginatorIntl() }],
})
export class SekcjaMieszkaniaComponent {
  displayedColumns: string[] = ['numer', 'pietro', 'pokoje', 'powierzchnia', 'status', 'akcje'];
  dataSource: MatTableDataSource<IMieszkanie>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  minPokoje: number = Math.min(...mieszkania.map(el => el.pokoje));
  maxPokoje: number = Math.max(...mieszkania.map(el => el.pokoje));
  pokojeOd = this.minPokoje;
  pokojeDo = this.maxPokoje;

  minPowierzchnia: number = Math.min(...mieszkania.map(el => el.powierzchnia));
  maxPowierzchnia: number = Math.max(...mieszkania.map(el => el.powierzchnia));
  powierzchniaOd = this.minPowierzchnia;
  powierzchniaDo = this.maxPowierzchnia;

  wybranyStatus: string[] = ['dostępne', 'rezerwacja', 'sprzedane'];

  constructor() {
    this.dataSource = new MatTableDataSource(mieszkania);
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: IMieszkanie, filter: string) => {
      console.log(filter)
      return data.status == filter;
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    const filteredData = mieszkania.filter(e => {
      return e.pokoje >= this.pokojeOd && e.pokoje <= this.pokojeDo &&
        e.powierzchnia >= this.powierzchniaOd && e.powierzchnia <= this.powierzchniaDo
    });
    this.dataSource.data = filteredData;
  }

  applyFilterStatus(){
    const filteredData = mieszkania.filter(e => {
      return this.wybranyStatus.some(el => el === e.status);
    });
    this.dataSource.data = filteredData;
  }
}
