import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentProductComponent } from './assignment-product.component';

describe('AssignmentProductComponent', () => {
  let component: AssignmentProductComponent;
  let fixture: ComponentFixture<AssignmentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
