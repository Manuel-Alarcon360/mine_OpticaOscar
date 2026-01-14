import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientslandingComponent } from './clientslanding.component';

describe('ClientslandingComponent', () => {
  let component: ClientslandingComponent;
  let fixture: ComponentFixture<ClientslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientslandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
