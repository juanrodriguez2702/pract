import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeInventarioComponent } from './estados-de-inventario.component';

describe('EstadosDeInventarioComponent', () => {
  let component: EstadosDeInventarioComponent;
  let fixture: ComponentFixture<EstadosDeInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosDeInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadosDeInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
