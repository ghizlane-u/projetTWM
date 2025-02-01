import { ComponentFixture, TestBed } from '@angular/core/testing';


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
