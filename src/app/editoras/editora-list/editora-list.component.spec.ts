/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditoraListComponent } from './editora-list.component';

describe('EditoraListComponent', () => {
  let component: EditoraListComponent;
  let fixture: ComponentFixture<EditoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
