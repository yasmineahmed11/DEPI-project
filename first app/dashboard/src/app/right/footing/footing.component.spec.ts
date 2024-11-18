import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootingComponent } from './footing.component';

describe('FootingComponent', () => {
  let component: FootingComponent;
  let fixture: ComponentFixture<FootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
