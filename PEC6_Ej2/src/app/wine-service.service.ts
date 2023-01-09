import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs'
import { throwError } from 'rxjs'; 
import { Food } from './models/food.model';

import { Wine } from './models/wine.model';

@Injectable({
  providedIn: 'root'
})
export class WineServiceService {
  wines: Wine[] = [];
  constructor() { }

  changeQuantity(wineID: number, changeInQuantity: number): Observable<Wine> {
    console.log('Wine Quantity change triggered for ' + wineID + ' - ' + changeInQuantity);

    let wine = this.wines.find(w => w.id === wineID);
    wine!.quantityInCart += changeInQuantity;
    return ObservableOf(wine!);

  }
create(wine: Wine): Observable<any> {
  wine.id = this.wines.length + 1;
  let found = this.wines.find(w => w.id === wine.id);
    if (found) {
      return throwError(() => new Error('Stock with code ' +  wine.id + ' already exists'));
    }
    wine.imageUrl = "assets/botella.jpg";
    wine.quantityInCart =  0;
    this.wines.push(wine);
    return ObservableOf({msg: 'Wine with ID ' + wine.id +
        ' successfully created'});;
}

  getWines(): Observable<Wine[]> {
    this.wines.push(new Wine({
      id: 1,
      name: "Tajinaste Tinto 2021",
      imageUrl: "assets/botella.jpg",
      isOnSale: true,
      price: 16.40,
      quantityInCart: 3,
      foodPairing: this.newFoods()
    }));

    this.wines.push(new Wine({
      id: 2,
      name: "Araucaria 2022",
      imageUrl: "assets/botella.jpg",
      isOnSale: true,
      price: 23.40,
      quantityInCart: 5,
      foodPairing: this.newFoods()
    }));

    this.wines.push(new Wine({
      id: 3,
      name: "El Grifo 2022",
      imageUrl: "assets/botella.jpg",
      isOnSale: false,
      price: 15.60,
      quantityInCart: 0,
      foodPairing: this.newFoods(),
    }));
    
    return ObservableOf(this.wines);
  }

  newFoods(): Food[] {
    let foods: Food[] = [];
    foods[0] = new Food({
      name: 'Comida 1',
      gluten: false,
      kcal: 100,
      vegan: false
    });

    foods[1] = new Food({
      name: 'Comida 2',
      gluten: true,
      kcal: 200,
      vegan: true
    });

    return foods;
  }

}
