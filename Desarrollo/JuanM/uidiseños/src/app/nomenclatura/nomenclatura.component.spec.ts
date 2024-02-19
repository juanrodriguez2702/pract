import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOMENCLATURAComponent } from './nomenclatura.component';

describe('NOMENCLATURAComponent', () => {
  let component: NOMENCLATURAComponent;
  let fixture: ComponentFixture<NOMENCLATURAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NOMENCLATURAComponent]
    });
    fixture = TestBed.createComponent(NOMENCLATURAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
