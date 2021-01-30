import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login.page';
import { provideMockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({}), { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],

      declarations: [ LoginComponent ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule, ReactiveFormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
