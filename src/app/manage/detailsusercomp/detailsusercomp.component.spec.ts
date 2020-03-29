import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsusercompComponent } from './detailsusercomp.component';

describe('DetailsusercompComponent', () => {
  let component: DetailsusercompComponent;
  let fixture: ComponentFixture<DetailsusercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsusercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsusercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
