import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchInputComponent } from './serch-input.component';

describe('SerchInputComponent', () => {
  let component: SerchInputComponent;
  let fixture: ComponentFixture<SerchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerchInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
