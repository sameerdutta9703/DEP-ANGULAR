import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedusercompComponent } from './deletedusercomp.component';

describe('DeletedusercompComponent', () => {
  let component: DeletedusercompComponent;
  let fixture: ComponentFixture<DeletedusercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedusercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedusercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
