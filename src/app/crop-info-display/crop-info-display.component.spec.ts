import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropInfoDisplayComponent } from './crop-info-display.component';

describe('CropInfoDisplayComponent', () => {
  let component: CropInfoDisplayComponent;
  let fixture: ComponentFixture<CropInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropInfoDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
