import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafePackagingLabelPage } from './safe-packaging-label.page';

describe('SafePackagingLabelPage', () => {
  let component: SafePackagingLabelPage;
  let fixture: ComponentFixture<SafePackagingLabelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SafePackagingLabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafePackagingLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
