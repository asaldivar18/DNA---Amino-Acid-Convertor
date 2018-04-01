import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CoreComponent} from '../app/core/core.component'
import { Sequence } from './sequence';
import { Component, OnInit } from '@angular/core';
import { Basecount } from './basecount';
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


describe('AppComponent', () => {

    let component: CoreComponent;
  let sequence: Sequence;
  let basecount: Basecount;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoreComponent,
      ],
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
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Initialize Basecount Class', ()=>{
  expect(component.basecount).not.toBe(null);
})

  it('Initialize Sequence Class', ()=>{
  expect(component.sequence).not.toBe(null);
})

 it('When DNA<->RNA button is pressed, converter type is changed', ()=>{
   component.dnarna()
   expect(component.converter).toEqual("DNA <-> RNA")
 })

 it('When String Cleanup button is pressed, converter type is changed', ()=>{
   component.stringCleanup()
   expect(component.converter).toEqual("String Cleanup")
 })

 it('When Reverse button is pressed, converter type is changed', ()=>{
   component.reverse()
   expect(component.converter).toEqual("Reverse DNA")
 })

 it('When Complement button is pressed, converter type is changed', ()=>{
   component.complement()
   expect(component.converter).toContain("Complement")
 })

  it('When Reverse Complement button is pressed, converter type is changed', ()=>{
   component.reverseComplement()
   expect(component.converter).toContain("Complement")
 })

  it('When Generate 3-key Amino Acids Button is pressed, converter type is changed', ()=>{
  component.dna = "AAACCC"
   component.strToAmino()
   expect(component.converter).toContain("Generate 3-key Amino Acids")
 })

   it('When Generate 1-key Amino Acids Button is pressed, converter type is changed', ()=>{
     component.dna = "AAACCCa"
   component.strTo1mino()
   expect(component.converter).toContain("Generate 1-key Amino Acids")
 })

it('When clearinput button is pressed, values are reset', ()=>{
  component.clearInput();
  expect(component.dna).toEqual('');
  expect(component.dnaoutput).toEqual('');
})



/*

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
