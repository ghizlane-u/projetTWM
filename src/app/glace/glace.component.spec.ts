import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlaceComponent } from './glace.component';

describe('GlaceComponent', () => {
  let component: GlaceComponent;
  let fixture: ComponentFixture<GlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
