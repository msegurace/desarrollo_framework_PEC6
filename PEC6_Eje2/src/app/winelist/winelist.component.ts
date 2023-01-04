import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from '../models/wine.model';
import { WineQuantityChange } from '../models/winequantitychange.model';
import { WineServiceService } from '../wine-service.service';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public wines$?: Observable<Wine[]>; 

  constructor(private wineService: WineServiceService) { 
  }

  ngOnInit(): void {
    this.wines$! = this.wineService.getWines();
  }
  
  onQuantityChange(change: WineQuantityChange) {
    this.wineService.changeQuantity(change.wine.id!, change.changeInQuantity);
  }
}
