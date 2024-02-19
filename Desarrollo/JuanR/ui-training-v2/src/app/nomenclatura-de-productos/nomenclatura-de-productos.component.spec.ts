import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenclaturaDeProductosComponent } from './nomenclatura-de-productos.component';

describe('NomenclaturaDeProductosComponent', () => {
  let component: NomenclaturaDeProductosComponent;
  let fixture: ComponentFixture<NomenclaturaDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomenclaturaDeProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomenclaturaDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
