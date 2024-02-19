import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricosDeInventarioComponent } from './historicos-de-inventario.component';

describe('HistoricosDeInventarioComponent', () => {
  let component: HistoricosDeInventarioComponent;
  let fixture: ComponentFixture<HistoricosDeInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricosDeInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricosDeInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
