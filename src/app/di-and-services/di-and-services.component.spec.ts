import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIAndServicesComponent } from './di-and-services.component';

describe('DIAndServicesComponent', () => {
  let component: DIAndServicesComponent;
  let fixture: ComponentFixture<DIAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIAndServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DIAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
