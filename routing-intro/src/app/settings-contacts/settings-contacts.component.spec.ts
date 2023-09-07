import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContactsComponent } from './settings-contacts.component';

describe('SettingsContactsComponent', () => {
  let component: SettingsContactsComponent;
  let fixture: ComponentFixture<SettingsContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsContactsComponent]
    });
    fixture = TestBed.createComponent(SettingsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
