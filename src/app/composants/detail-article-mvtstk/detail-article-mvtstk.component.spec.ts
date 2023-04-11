import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleMvtstkComponent } from './detail-article-mvtstk.component';

describe('DetailArticleMvtstkComponent', () => {
  let component: DetailArticleMvtstkComponent;
  let fixture: ComponentFixture<DetailArticleMvtstkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleMvtstkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArticleMvtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
