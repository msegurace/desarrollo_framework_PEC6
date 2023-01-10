import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { Wine } from '../models/wine.model';
import { WineServiceService } from '../wine-service.service';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share} from 'rxjs/operators';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public wines$?: Observable<Wine[]>; 
  public searchString: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadWinesList: Subject<void> = new Subject();

  constructor(private wineService: WineServiceService) { 
  }

  ngOnInit(): void {
    //this.wines$! = this.wineService.getWines();
    this.wines$ = this.searchSubject.pipe(      
      startWith(this.searchString),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.wineService.getWines(this.searchString)),
      share()
    );


  }

  search() {
    //this.wines$! = this.wineService.getWines();
    this.searchSubject.next(this.searchString);
  }

}
