import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide home option if url is /', () => {
    component.validateURL('/');
    fixture.detectChanges();

    const urlHomeInfo = component.routesMenu[0];
    expect(urlHomeInfo.show).toEqual(false);
  });

  it('should show home option if url is /contact', () => {
    component.validateURL('/contact');
    fixture.detectChanges();

    const urlHomeInfo = component.routesMenu[0];
    expect(urlHomeInfo.show).toEqual(true);
  });
});
