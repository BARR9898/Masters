import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMaestriaComponent } from './crear-maestria.component';

describe('CrearMaestriaComponent', () => {
  let component: CrearMaestriaComponent;
  let fixture: ComponentFixture<CrearMaestriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMaestriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMaestriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
