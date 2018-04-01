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
  let basecount: Basecount;
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
  });


  it('check(string) Replaces all invalid characters with X, not in set [AUTCG]', ()=>{
    expect(component.sequence.check('zxbnm')).toEqual('XXXXX')
  });

  it('check(string) If in set [AUTCG], return [AUTG]', ()=>{
    expect(component.sequence.check('AAAA')).toEqual('AAAA')
  });

  it('dnarna(string) Replaces all Ts with U, and U with T', ()=>{
    expect(component.sequence.dnarna('TTTUUU')).toEqual('UUUTTT')
  });

  it('dnarna(string) Replaces all Ts with U, and U with T. any other valid character is not replaced', ()=>{
    expect(component.sequence.dnarna('ATTTUUU')).toEqual('AUUUTTT')
  });

  it('reverseSeq(string) Checks and replaces invalid characters and Reverses all valid characters', ()=>{
    expect(component.sequence.reverseSeq('ABCD')).toEqual('XCXA')
  });

  it('reverseSeq(string) Reverses a string containing valid characters', ()=>{
    expect(component.sequence.reverseSeq('ATGC')).toEqual('CGTA')
  });

  it('complementSeq(string) replaces T with A, A with T, G with C, C with G', ()=>{
    expect(component.sequence.complementSeq('TAGC')).toEqual('ATCG')
  })

  it('ComplementRNA(string) replaces U with A, A with U, G with C, C with G', ()=>{
    expect(component.sequence.complementRNA('UAGC')).toEqual('AUCG')
  })

  it('reverseComplementRNA(string) replaces U with A, A with U, G with C, C with G', ()=>{
    expect(component.sequence.reverseComplementRNA('UAGC')).toEqual('GCUA')
  })

  it('reverseComplement(string) replaces T with A, A with T, G with C, C with G', ()=>{
    expect(component.sequence.reverseComplement('TAGC')).toEqual('GCTA')
  })

  it('strToAmino(string) converts 3 key values into Amino Acid protien', ()=>{
      expect(component.sequence.strToAmino('atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag', 1))
      .toEqual('MCAARLAAAAAAAQSVYAFSARPLAGGEPVSLGSLRGKVLLIENVASLMNELQRRLGPRGLVVLGFPCNQFGHQENAKNEEILNSLKYVRPGGGFEPNFMLFEKCEVNGAGAHPLFAFLREALPAPSDDATALMTDPKLITWSPVCRNDVAWNFEKFLVGPDGVPLRRYSRRFQTIDIEPDIEALLSQGPSCA*')
    })

  it('strToAmino(string) converts 3 key values into Amino Acid protien (First Letter)', ()=>{
    expect(component.sequence.strToAmino('atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag', 0))
    .toEqual('Met Cys Ala Ala Arg Leu Ala Ala Ala Ala Ala Ala Ala Gln Ser Val Tyr Ala Phe Ser Ala Arg Pro Leu Ala Gly Gly Glu Pro Val Ser Leu Gly Ser Leu Arg Gly Lys Val Leu Leu Ile Glu Asn Val Ala Ser Leu Met Asn Glu Leu Gln Arg Arg Leu Gly Pro Arg Gly Leu Val Val Leu Gly Phe Pro Cys Asn Gln Phe Gly His Gln Glu Asn Ala Lys Asn Glu Glu Ile Leu Asn Ser Leu Lys Tyr Val Arg Pro Gly Gly Gly Phe Glu Pro Asn Phe Met Leu Phe Glu Lys Cys Glu Val Asn Gly Ala Gly Ala His Pro Leu Phe Ala Phe Leu Arg Glu Ala Leu Pro Ala Pro Ser Asp Asp Ala Thr Ala Leu Met Thr Asp Pro Lys Leu Ile Thr Trp Ser Pro Val Cys Arg Asn Asp Val Ala Trp Asn Phe Glu Lys Phe Leu Val Gly Pro Asp Gly Val Pro Leu Arg Arg Tyr Ser Arg Arg Phe Gln Thr Ile Asp Ile Glu Pro Asp Ile Glu Ala Leu Leu Ser Gln Gly Pro Ser Cys Ala * ')
  })


  it('basecount getStrong_Avg calculates average of respectable values', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    component.basecount.getstrong_AVG()
    expect(component.basecount.strong_AVG).toBeGreaterThan(0)
  })

    it('basecount getWeak_AVG calculates average of respectable values', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    component.basecount.getweak_AVG()
    expect(component.basecount.weak_AVG).toBeGreaterThan(0)
  })


    it('basecount counts the number of A', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    expect(component.basecount.aCount).toBeGreaterThan(0)
  })

    it('basecount counts the number of T', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    expect(component.basecount.tCount).toBeGreaterThan(0)
  })
      it('basecount counts the number of G', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    expect(component.basecount.gCount).toBeGreaterThan(0)
  })

    it('basecount counts the number of C', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    expect(component.basecount.cCount).toBeGreaterThan(0)
  })

  it('clear resets all values in basecount to 0', ()=>{
    component.basecount.getBaseCount("atg tgt gct gct cgg cta gcg gcg gcg gcg gcg gcg gcc cag tcg gtg tat gcc ttc tcg gcg cgc ccg ctg gcc ggc ggg gag cct gtg agc ctg ggc tcc ctg cgg ggc aag gta cta ctt atc gag aat gtg gcg tcc ctc atg aac gag ctg cag cgg cgc ctc gga ccc cgg ggc ctg gtg gtg ctc ggc ttc ccg tgc aac cag ttt ggg cat cag gag aac gcc aag aac gaa gag att ctg aat tcc ctc aag tac gtc cgg cct ggt ggt ggg ttc gag ccc aac ttc atg ctc ttc gag aag tgc gag gtg aac ggt gcg ggg gcg cac cct ctc ttc gcc ttc ctg cgg gag gcc ctg cca gct ccc agc gac gac gcc acc gcg ctt atg acc gac ccc aag ctc atc acc tgg tct ccg gtg tgt cgc aac gat gtt gcc tgg aac ttt gag aag ttc ctg gtg ggc cct gac ggt gtg ccc cta cgc agg tac agc cgc cgc ttc cag acc att gac atc gag cct gac atc gaa gcc ctg ctg tct caa ggg ccc agc tgt gcc tag")
    component.basecount.clear();
    expect(component.basecount.aCount).toEqual(0)
    expect(component.basecount.tCount).toEqual(0)
    expect(component.basecount.gCount).toEqual(0)
    expect(component.basecount.cCount).toEqual(0)
    expect(component.basecount.weak_AVG).toEqual(0)
    expect(component.basecount.strong_AVG).toEqual(0)
  
  })







});
