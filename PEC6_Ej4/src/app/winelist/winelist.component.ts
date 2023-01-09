import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Wine } from '../models/wine.model';
import { WineServiceService } from '../wine-service.service';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share } from 'rxjs/operators';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public wines$?: Observable<Wine[]>; 
  public searchString: string = '';

  private searchTerms: Subject<string> = new Subject();
  private reloadWinesList: Subject<void> = new Subject();

  constructor(private wineService: WineServiceService) { 
  }

  ngOnInit(): void {
    //this.wines$! = this.wineService.getWines();
    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.wineService.getWines(this.searchString)),
      share()
    );
  }

  search() {
    //this.wines$! = this.wineService.getWines();
    this.searchTerms.next(this.searchString);
  }

  onCreate() {
    this.reloadWinesList.next();
  }
}
