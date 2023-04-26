import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvinZComponent } from './kvin-z.component';

describe('KvinZComponent', () => {
  let component: KvinZComponent;
  let fixture: ComponentFixture<KvinZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvinZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvinZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
