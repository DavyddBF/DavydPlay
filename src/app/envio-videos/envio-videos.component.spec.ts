import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioVideosComponent } from './envio-videos.component';

describe('EnvioVideosComponent', () => {
  let component: EnvioVideosComponent;
  let fixture: ComponentFixture<EnvioVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvioVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
