import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCmpComponent } from './produit-cmp.component';

describe('ProduitCmpComponent', () => {
  let component: ProduitCmpComponent;
  let fixture: ComponentFixture<ProduitCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
