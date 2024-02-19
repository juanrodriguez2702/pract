import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTecnicaDeProductoComponent } from './ficha-tecnica-de-producto.component';

describe('FichaTecnicaDeProductoComponent', () => {
  let component: FichaTecnicaDeProductoComponent;
  let fixture: ComponentFixture<FichaTecnicaDeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTecnicaDeProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaTecnicaDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
