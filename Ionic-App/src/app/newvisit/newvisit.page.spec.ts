import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewvisitPage } from './newvisit.page';

describe('NewvisitPage', () => {
  let component: NewvisitPage;
  let fixture: ComponentFixture<NewvisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewvisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
