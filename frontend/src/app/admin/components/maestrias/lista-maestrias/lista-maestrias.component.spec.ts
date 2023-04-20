import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestriasComponent } from './lista-maestrias.component';

describe('ListaMaestriasComponent', () => {
  let component: ListaMaestriasComponent;
  let fixture: ComponentFixture<ListaMaestriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMaestriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMaestriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
