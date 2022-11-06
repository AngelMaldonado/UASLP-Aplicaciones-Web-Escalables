import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdoptComponent } from './form-adopt.component';

describe('FormAdoptComponent', () => {
  let component: FormAdoptComponent;
  let fixture: ComponentFixture<FormAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
