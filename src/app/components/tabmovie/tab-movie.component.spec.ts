import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMovieComponent } from './tab-movie.component';

describe('TabfilmComponent', () => {
  let component: TabMovieComponent;
  let fixture: ComponentFixture<TabMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
