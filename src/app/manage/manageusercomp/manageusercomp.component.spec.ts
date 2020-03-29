import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageusercompComponent } from './manageusercomp.component';

describe('ManageusercompComponent', () => {
  let component: ManageusercompComponent;
  let fixture: ComponentFixture<ManageusercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageusercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageusercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
