import { Injectable } from '@angular/core';
import { CropInformation } from './Interfaces/cropInformation';

@Injectable({
  providedIn: 'root'
})
export class CropDBService {

  constructor() { }

  getAllCropInformation(): CropInformation[] {
    return this.cropDataBase;
  }

  getCropsByName(name: string): CropInformation | undefined {
    return this.cropDataBase.find((cropInformation) => cropInformation.name === name);
  }

  cropDataBase : CropInformation[] = [
    {
      name: "Parsnip",
      season: ["Spring"],
      growthTime: 4,
      xp: 8,
      baseSellPrice: 35,
      silverSellPrice: 43,
      goldSellPrice: 52,
      platSellPrice: 70,

    }
  ]
}
