import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreComponent } from './core.component';
import { Sequence } from '../sequence';
import { Component, OnInit } from '@angular/core';
import { Basecount } from '../basecount';
import { MatSidenavModule, MatDrawerContent, MatDrawer} from '@angular/material/sidenav';
import {MatSnackBar, MatDialog} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let sequence: Sequence;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponent ],
            imports:[
            BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //sequence = new Sequence();
  });


  it('check Replaces all invalid characters with X, not in set [AUTCG]', ()=>{
    expect(component.sequence.check('zxbnm')).toEqual('XXXXX')
  });

  it('check If in set [AUTCG], return [AUTG]', ()=>{
    expect(component.sequence.check('AAAA')).toEqual('AAAA')
  });

  it('dnarna Replaces all Ts with U, and U with T ', ()=>{
    expect(component.sequence.dnarna('TTTUUU')).toEqual('UUUTTT')
  });

  it('dnarna Replaces all Ts with U, and U with T. any other valid character is not replaced', ()=>{
    expect(component.sequence.dnarna('ATTTUUU')).toEqual('AUUUTTT')
  });

  it('reverseSeq Checks and replaces invalid characters and Reverses all valid characters', ()=>{
    expect(component.sequence.reverseSeq('ABCD')).toEqual('XCXA')
  });

  it('reverseSeq Reverses a string containing valid characters', ()=>{
    expect(component.sequence.reverseSeq('ATGC')).toEqual('CGTA')
  });

  it('complementSeq replaces T with A, A with T, G with C, C with G', ()=>{
    expect(component.sequence.complementSeq('TAGC')).toEqual('ATCG')
  })

  it('complementSeq replaces T with A, A with T, G with C, C with G', ()=>{
    expect(component.sequence.complementSeq('TAGC')).toEqual('ATCG')
  })






});
