import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from '../models/wine.model';
import { WineServiceService } from '../wine-service.service';

@Component({
  selector: 'app-wineitem',
  template: `
    <div class="wine-card" 
        [ngClass]="{'insale': wine.isOnSale, 'notsale': !wine.isOnSale}">
        <img src="{{ wine.imageUrl | nullimages }}" alt="Imagen botella de vino" />
        <p>{{ wine.name }}</p>
       <!-- <p>{{ wine.price | number : '.2-2'}} €</p> -->
       <p>{{ wine.price|currency:'EUR':true}}</p>
        <div class="wine-buttons">
        <button *ngIf="wine.quantityInCart > 0" (click)="decrementInCart()">-</button>
            <span>{{ wine.quantityInCart }}</span>
            <button (click)="incrementInCart()">+</button>
        </div>
    </div>
  `,
  styles: [ 
   ` 
    .wine-card {
      border: 1px solid black;
      border-radius: 5px;
      display: inline-block;
      padding: 10px;
      text-align: center;
    }
    
    .wine-card p {
      font-size: 25px;
    }
  
    .wine-buttons button {
      width: 40px;
      height: 40px;
      border-radius: 2px;
      margin: 10px;
    }
  
    .insale {
      background-color: darkslateblue;
    }
    
    .notsale {
      background-color: white;
    }
    `
  ]
})
export class WineitemComponent {

  @Input() public wine: Wine;

  constructor(private wineService: WineServiceService) {
    this.wine = {
      id: 0,
      name: '', 
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: []
    }
  }

  incrementInCart() {
    this.wineService.changeQuantity(this.wine, 1)
      .subscribe((wine) => this.wine.quantityInCart += 1);
  }

  decrementInCart() {
    this.wineService.changeQuantity(this.wine, -1)
      .subscribe((wine) => this.wine.quantityInCart -= 1);
  }

}
