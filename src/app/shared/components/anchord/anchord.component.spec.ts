import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchordComponent } from './anchord.component';

describe('AnchordComponent', () => {
  let component: AnchordComponent;
  let fixture: ComponentFixture<AnchordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
