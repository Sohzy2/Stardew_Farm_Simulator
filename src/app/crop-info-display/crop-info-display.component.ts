import { Component , inject} from '@angular/core';
import { CropInformation } from '../Interfaces/cropInformation';
import { CropDBService } from '../crop-db.service';
import { CropDetailsComponent } from '../crop-details/crop-details.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-crop-info-display',
  standalone: true,
  imports: [CommonModule, CropDetailsComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter" #filter/>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-crop-details 
      *ngFor="let cropList of filteredCropList"
      [cropInformation]="filteredCropList[0]">
  </app-crop-details>
  
  </section>
`,
  styleUrl: './crop-info-display.component.css'
})
export class CropInfoDisplayComponent {
  cropDBService : CropDBService = inject (CropDBService);
  cropList: CropInformation[] = [];
  filteredCropList: CropInformation[] = [];


  constructor() {
    this.cropList = this.cropDBService.getAllCropInformation();
    this.filteredCropList = this.cropDBService.getAllCropInformation();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCropList = this.cropList;
    }
    this.filteredCropList = this.cropList.filter((crop) =>
      crop?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
