import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilCmpComponent } from './acceuil-cmp.component';

describe('AcceuilCmpComponent', () => {
  let component: AcceuilCmpComponent;
  let fixture: ComponentFixture<AcceuilCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
