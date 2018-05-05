import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCmpComponent } from './clients-cmp.component';

describe('ClientsCmpComponent', () => {
  let component: ClientsCmpComponent;
  let fixture: ComponentFixture<ClientsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
