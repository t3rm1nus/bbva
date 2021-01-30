import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CuentaPage } from './cuenta.page';
import { Router } from '@angular/router';
describe('CuentaPage', () => {
  let component: CuentaPage;
  let fixture: ComponentFixture<CuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      providers: [provideMockStore({}), { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      declarations: [ CuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
