import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsrtProductComponent } from './insrt-product.component';

describe('InsrtProductComponent', () => {
  let component: InsrtProductComponent;
  let fixture: ComponentFixture<InsrtProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsrtProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsrtProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
