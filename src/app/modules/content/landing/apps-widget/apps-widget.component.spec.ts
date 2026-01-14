import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsWidgetComponent } from './apps-widget.component';

describe('AppsWidgetComponent', () => {
  let component: AppsWidgetComponent;
  let fixture: ComponentFixture<AppsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
