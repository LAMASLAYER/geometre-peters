import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobnavbarComponent } from './mobnavbar.component';

describe('MobnavbarComponent', () => {
  let component: MobnavbarComponent;
  let fixture: ComponentFixture<MobnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
