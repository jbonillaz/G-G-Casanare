import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contenido3Page } from './contenido3.page';

describe('Contenido3Page', () => {
  let component: Contenido3Page;
  let fixture: ComponentFixture<Contenido3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenido3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contenido3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
