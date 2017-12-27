/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StylingComponent } from './styling.component';

describe('StylingComponent', () => {
  let component: StylingComponent;
  let fixture: ComponentFixture<StylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
