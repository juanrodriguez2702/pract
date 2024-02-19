import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasCComponent } from './pruebas-c.component';

describe('PruebasCComponent', () => {
  let component: PruebasCComponent;
  let fixture: ComponentFixture<PruebasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
