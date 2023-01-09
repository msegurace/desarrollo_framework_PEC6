import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from '../models/wine.model';
import { WineQuantityChange } from '../models/winequantitychange.model';

@Component({
  selector: 'app-wineitem',
  template: `
    <div class="wine-card" 
        [ngClass]="{'insale': wine!.isOnSale, 'notsale': !wine!.isOnSale}">
        <img src="{{ wine!.imageUrl }}" alt="Imagen botella de vino" />
        <p>{{ wine!.name }}</p>
        <p>{{ wine!.price | number : '.2-2'}} €</p>
        <div class="wine-buttons">
        <button *ngIf="wine!.quantityInCart > 0" (click)="decrementInCart()">-</button>
            <span>{{ wine!.quantityInCart }}</span>
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineitemComponent {

  @Input() public wine?: Wine;
  @Output() public quantityChange: EventEmitter<WineQuantityChange> = new EventEmitter();

  constructor() {}

  incrementInCart() {
    this.quantityChange.emit({ wine: this.wine!, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.wine!.quantityInCart > 0) {
      this.quantityChange.emit({ wine: this.wine!, changeInQuantity: -1 });
    }
  }

}
