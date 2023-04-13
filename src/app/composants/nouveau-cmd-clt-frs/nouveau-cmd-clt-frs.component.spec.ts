import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCmdCltFrsComponent } from './nouveau-cmd-clt-frs.component';

describe('NouveauCmdCltFrsComponent', () => {
  let component: NouveauCmdCltFrsComponent;
  let fixture: ComponentFixture<NouveauCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCmdCltFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
