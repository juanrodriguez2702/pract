import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariosEjecutadosComponent } from './inventarios-ejecutados.component';

describe('InventariosEjecutadosComponent', () => {
  let component: InventariosEjecutadosComponent;
  let fixture: ComponentFixture<InventariosEjecutadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventariosEjecutadosComponent]
    });
    fixture = TestBed.createComponent(InventariosEjecutadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
