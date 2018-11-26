import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPortfolioComponent } from './full-portfolio.component';

describe('FullPortfolioComponent', () => {
  let component: FullPortfolioComponent;
  let fixture: ComponentFixture<FullPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
