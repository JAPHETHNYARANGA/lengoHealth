import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPageComponent } from './involved-page.component';

describe('InvolvedPageComponent', () => {
  let component: InvolvedPageComponent;
  let fixture: ComponentFixture<InvolvedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvolvedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvolvedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
