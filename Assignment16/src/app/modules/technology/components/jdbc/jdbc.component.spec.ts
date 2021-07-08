import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdbcComponent } from './jdbc.component';

describe('JdbcComponent', () => {
  let component: JdbcComponent;
  let fixture: ComponentFixture<JdbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
