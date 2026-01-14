import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHistoriaComponent } from './vista-historia.component';

describe('VistaHistoriaComponent', () => {
  let component: VistaHistoriaComponent;
  let fixture: ComponentFixture<VistaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaHistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
