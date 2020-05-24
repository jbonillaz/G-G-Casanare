import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contenido1Page } from './contenido1.page';

describe('Contenido1Page', () => {
  let component: Contenido1Page;
  let fixture: ComponentFixture<Contenido1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenido1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
