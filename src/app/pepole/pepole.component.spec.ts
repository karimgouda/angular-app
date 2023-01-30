import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepoleComponent } from './pepole.component';

describe('PepoleComponent', () => {
  let component: PepoleComponent;
  let fixture: ComponentFixture<PepoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
