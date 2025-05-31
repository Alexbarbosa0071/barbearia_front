import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClienteModalComponent } from './create-cliente-modal.component';

describe('ClienteModalComponent', () => {
  let component: CreateClienteModalComponent;
  let fixture: ComponentFixture<CreateClienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClienteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
