import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetllTracksInLocalComponent } from './getll-tracks-in-local.component';

describe('GetllTracksInLocalComponent', () => {
  let component: GetllTracksInLocalComponent;
  let fixture: ComponentFixture<GetllTracksInLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetllTracksInLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetllTracksInLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
