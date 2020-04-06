import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserUpdationComponent } from './manage-user-updation.component';

describe('ManageUserUpdationComponent', () => {
  let component: ManageUserUpdationComponent;
  let fixture: ComponentFixture<ManageUserUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
