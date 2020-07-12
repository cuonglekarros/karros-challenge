import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabfilmComponent } from './tabfilm.component';

describe('TabfilmComponent', () => {
  let component: TabfilmComponent;
  let fixture: ComponentFixture<TabfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
