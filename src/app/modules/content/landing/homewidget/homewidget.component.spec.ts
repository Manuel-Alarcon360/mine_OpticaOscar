import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewidgetComponent } from './homewidget.component';

describe('HomewidgetComponent', () => {
  let component: HomewidgetComponent;
  let fixture: ComponentFixture<HomewidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomewidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
