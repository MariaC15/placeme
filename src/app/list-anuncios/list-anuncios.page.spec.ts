import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAnunciosPage } from './list-anuncios.page';

describe('ListAnunciosPage', () => {
  let component: ListAnunciosPage;
  let fixture: ComponentFixture<ListAnunciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnunciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnunciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
