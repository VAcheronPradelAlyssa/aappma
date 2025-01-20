import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresConseilComponent } from './membres-conseil.component';

describe('MembresConseilComponent', () => {
  let component: MembresConseilComponent;
  let fixture: ComponentFixture<MembresConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembresConseilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
