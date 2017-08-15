import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompindicadoresComponent } from './compindicadores.component';

describe('CompindicadoresComponent', () => {
  let component: CompindicadoresComponent;
  let fixture: ComponentFixture<CompindicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompindicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompindicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
