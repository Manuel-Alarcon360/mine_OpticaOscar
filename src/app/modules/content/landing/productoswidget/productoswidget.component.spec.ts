import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoswidgetComponent } from './productoswidget.component';

describe('ProductoswidgetComponent', () => {
  let component: ProductoswidgetComponent;
  let fixture: ComponentFixture<ProductoswidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoswidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoswidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
