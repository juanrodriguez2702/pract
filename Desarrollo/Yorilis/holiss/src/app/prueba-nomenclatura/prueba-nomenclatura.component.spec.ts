import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaNomenclaturaComponent } from './prueba-nomenclatura.component';

describe('PruebaNomenclaturaComponent', () => {
  let component: PruebaNomenclaturaComponent;
  let fixture: ComponentFixture<PruebaNomenclaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaNomenclaturaComponent]
    });
    fixture = TestBed.createComponent(PruebaNomenclaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
