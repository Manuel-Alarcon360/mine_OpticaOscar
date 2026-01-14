import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosOpticaComponent } from './eventos-optica.component';

describe('EventosOpticaComponent', () => {
  let component: EventosOpticaComponent;
  let fixture: ComponentFixture<EventosOpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosOpticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosOpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
