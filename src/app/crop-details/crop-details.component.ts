import { Component, Input, inject } from '@angular/core';
import { CropInformation } from '../Interfaces/cropInformation';
import { CropDBService } from '../crop-db.service';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-crop-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      /> -->
      <h2 class="listing-heading">{{ cropInformation.name }}</h2>
      <h3 class="listing-seasons">{{ cropInformation.season }}</h3>
      <p class="listing-growth-time">{{ cropInformation.growthTime }}</p>
      <p class="listing-xp">{{ cropInformation.xp }}</p>
      <p class="listing-base-sell-price">{{ cropInformation.baseSellPrice }}</p>
      <p class="listing-silver-sell-price">{{ cropInformation.silverSellPrice }}</p>
      <p class="listing-gold-sell-price">{{ cropInformation.goldSellPrice }}</p>
      <p class="listing-plat-sell-price">{{ cropInformation.platSellPrice }}</p>
      <!-- <a [routerLink]="['/details', cropInformation.id]">Learn More</a> -->
</section>`,
  styleUrl: './crop-details.component.css'
})
export class CropDetailsComponent {
 @Input() cropInformation!: CropInformation;

}
