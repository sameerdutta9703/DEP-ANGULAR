import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveusercompComponent } from './activeusercomp.component';

describe('ActiveusercompComponent', () => {
  let component: ActiveusercompComponent;
  let fixture: ComponentFixture<ActiveusercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveusercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveusercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
