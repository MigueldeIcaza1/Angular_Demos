import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirectiveComponent } from './built-in-directive.component';

describe('BuiltInDirectiveComponent', () => {
  let component: BuiltInDirectiveComponent;
  let fixture: ComponentFixture<BuiltInDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
