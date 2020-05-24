import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contenido2Page } from './contenido2.page';

describe('Contenido2Page', () => {
  let component: Contenido2Page;
  let fixture: ComponentFixture<Contenido2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenido2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
