import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeInventarioComponent } from './estados-de-inventario.component';

describe('EstadosDeInventarioComponent', () => {
  let component: EstadosDeInventarioComponent;
  let fixture: ComponentFixture<EstadosDeInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosDeInventarioComponent]
    });
    fixture = TestBed.createComponent(EstadosDeInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
