import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgSwitchCaseComponent } from './diretiva-ng-switch-case.component';

describe('DiretivaNgSwitchCaseComponent', () => {
  let component: DiretivaNgSwitchCaseComponent;
  let fixture: ComponentFixture<DiretivaNgSwitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgSwitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
