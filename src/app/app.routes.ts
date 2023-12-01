import { Routes } from '@angular/router';
import { CropInfoDisplayComponent } from './crop-info-display/crop-info-display.component';
export const routes: Routes = [
    {
        path: '',
        component: CropInfoDisplayComponent,
        title: 'Crop Details Search?',
      },
];
export default routes;