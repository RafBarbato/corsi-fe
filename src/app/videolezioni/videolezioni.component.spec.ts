import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolezioniComponent } from './videolezioni.component';

describe('VideolezioniComponent', () => {
  let component: VideolezioniComponent;
  let fixture: ComponentFixture<VideolezioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideolezioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideolezioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
