import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/footer/footer.component.spec.ts
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
========
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
>>>>>>>> c71715bb9fe1638fcdf35a5936b80aa87b7e265b:src/app/glace/glace.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
