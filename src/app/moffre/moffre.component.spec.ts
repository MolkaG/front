import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoffreComponent } from './moffre.component';

describe('MoffreComponent', () => {
  let component: MoffreComponent;
  let fixture: ComponentFixture<MoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
