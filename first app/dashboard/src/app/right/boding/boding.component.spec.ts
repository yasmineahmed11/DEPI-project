import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodingComponent } from './boding.component';

describe('BodingComponent', () => {
  let component: BodingComponent;
  let fixture: ComponentFixture<BodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
