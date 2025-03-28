import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComspecComponent } from './comspec.component';

describe('ComspecComponent', () => {
  let component: ComspecComponent;
  let fixture: ComponentFixture<ComspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComspecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
