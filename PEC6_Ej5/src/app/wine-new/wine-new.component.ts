import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomWineValidator } from '../custom-wine-validator';
import { Wine } from '../models/wine.model';
import { WineServiceService } from '../wine-service.service';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {

  public wineForm!: FormGroup;
  public wine: Wine;

  constructor(private fb: FormBuilder, private wineService: WineServiceService) {       
    this.createForm();
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

  
  createForm() {
    this.wineForm = this.fb.group({             
      name: [null, [Validators.required, new CustomWineValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['assets/images/wine3.jpg'],
      isOnSale: [null, null]
    });
  }

  onSubmit() {
    console.log('Wine form', this.wineForm.value);
    if (this.wineForm.valid) {
      this.wine = this.wineForm.value;
      console.log('on submit: ' + this.wine.name + ' ' + this.wine.price);
      this.wineService.create(this.wine)
          .subscribe({complete: console.info});
      this.wineForm.reset();
    } else {
      this.wineForm.markAllAsTouched();
      console.error('Wine form is in an invalid state');
    }

  }
}
