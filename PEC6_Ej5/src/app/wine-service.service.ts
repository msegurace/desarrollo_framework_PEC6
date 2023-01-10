import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Wine } from './models/wine.model';

@Injectable({
  providedIn: 'root'
})
export class WineServiceService {
  BASE_URL="http://localhost:3000";
  wines: Wine[] = [];

  constructor(private http: HttpClient) { }

  getWines(query: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.BASE_URL + '/api/wine', {
      params: {q: query},
      observe: 'body'
    });
  }

  create(wine: Wine): Observable<any> {
    return this.http.post<Wine>(this.BASE_URL + '/api/wine', wine);
  }

  changeQuantity(wine: Wine, changeInQuantity: number): Observable<Wine> {
    console.log('Wine Quantity change triggered for ' + wine.id + ' - ' + changeInQuantity);
    
    return this.http.patch<Wine>(this.BASE_URL + '/api/wine/' + wine.id,
    {
      changeInQuantity: changeInQuantity
    });

  }

 
}
