import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvnComponent } from './svn.component';

describe('SvnComponent', () => {
  let component: SvnComponent;
  let fixture: ComponentFixture<SvnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
