import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediasComponent } from './comedias.component';

describe('ComediasComponent', () => {
  let component: ComediasComponent;
  let fixture: ComponentFixture<ComediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComediasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
