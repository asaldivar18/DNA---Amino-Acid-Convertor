import { Component, OnInit } from '@angular/core';
import { Sequence } from '../sequence';
import { Basecount } from '../basecount';
import { MatSidenavModule, MatDrawerContent, MatDrawer} from '@angular/material/sidenav';
import {MatSnackBar, MatDialog} from '@angular/material';



@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  dna: string;
  dnaoutput: string;
  sequence: Sequence;
  basecount: Basecount;
    events = [];
    converter:string;
        packsize: number;
    breakline: number;
    


  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    //console.log(this.sequence.check("abcdefgh"));
  }

  ngOnInit() {
    this.sequence = new Sequence();
    this.basecount = new Basecount(this.dna);
    this.getBasecount();
    this.dna = " "
    
  }

  getBasecount(){
    if(this.dna.match(/[^AUTCGautcg]/))
    {
      let snackBarRef = this.snackBar.open('Invalid Characters');
      document.getElementById("warning").style.visibility = "visible";
    } else {
      document.getElementById("warning").style.visibility = "hidden";

    };

    this.basecount.getBaseCount(this.dna);
    this.basecount.getstrong_AVG();
    this.basecount.getweak_AVG();
  }
  
  stringCleanup() {
    if(this.dna.match(/[^AUTCGautcg]/))
    {
      if(confirm("Invalid Characters")){
        this.dnaoutput = this.sequence.format(this.sequence.check(this.dna),this.packsize,this.breakline);
        this.converter = "String Cleanup";
      } else {
        this.clearInput();
      }
  
    } 
  }

  dnarna() {
    this.dnaoutput = this.sequence.format(this.sequence.dnarna(this.dna), this.packsize, this.breakline);
    this.converter = "DNA <-> RNA";
  }

  reverse() {
    this.dnaoutput = this.sequence.format(this.sequence.reverseSeq(this.dna), this.packsize, this.breakline);
    this.converter = "Reverse DNA"
  }

  complement() {
    if(this.dna.includes("U") || this.dna.includes("u")){
      this.converter = "Complement RNA"
      this.dnaoutput = this.sequence.format(this.sequence.complementRNA(this.dna), this.packsize, this.breakline);
    } else {
    this.dnaoutput = this.sequence.format(this.sequence.complementSeq(this.dna), this.packsize, this.breakline);
    this.converter = "Complement DNA"
    }
  }

  reverseComplement() {
    this.dnaoutput = this.sequence.format(this.sequence.reverseComplement(this.dna), this.packsize, this.breakline);
    this.converter = "Reverse & Complement"

  }

  strToAmino() {
    this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 0), 0,this.breakline);
    this.converter = "Generate 3-key Amino Acids"
  }

  strTo1mino() {
    this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 1), this.packsize, this.breakline);
    this.converter = "Generate 1-key Amino Acids"
  }
/*
  format(pack, line) {
    //this.dnaoutput = this.sequence.check(this.dna);
    this.dnaoutput = this.sequence.format(this.dnaoutput, pack, line);
    this.breakline = this.sequence.breakline;
    this.packsize = this.sequence.packsize;
    
  }
*/


clearInput(){
  this.dna  = "";
  this.dnaoutput = "";
}

complementRNA(){
  this.dnaoutput = this.sequence.complementRNA(this.dna);
}

}
