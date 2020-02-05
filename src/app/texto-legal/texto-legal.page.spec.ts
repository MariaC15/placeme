import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextoLegalPage } from './texto-legal.page';

describe('TextoLegalPage', () => {
  let component: TextoLegalPage;
  let fixture: ComponentFixture<TextoLegalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoLegalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextoLegalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
