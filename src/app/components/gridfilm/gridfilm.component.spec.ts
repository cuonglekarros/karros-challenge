import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridfilmComponent } from './gridfilm.component';

describe('GridfilmComponent', () => {
  let component: GridfilmComponent;
  let fixture: ComponentFixture<GridfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
