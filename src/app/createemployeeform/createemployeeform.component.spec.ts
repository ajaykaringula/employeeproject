import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeeformComponent } from './createemployeeform.component';

describe('CreateemployeeformComponent', () => {
  let component: CreateemployeeformComponent;
  let fixture: ComponentFixture<CreateemployeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateemployeeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
