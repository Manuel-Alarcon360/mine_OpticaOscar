import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLentesComponent } from './prueba-lentes.component';

describe('PruebaLentesComponent', () => {
  let component: PruebaLentesComponent;
  let fixture: ComponentFixture<PruebaLentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaLentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaLentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
