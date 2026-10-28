import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppareilDetail } from './appareil-detail';

describe('AppareilDetail', () => {
  let component: AppareilDetail;
  let fixture: ComponentFixture<AppareilDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppareilDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AppareilDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
