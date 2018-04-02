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
  tmpoutput: string;
  sequence: Sequence;
  basecount: Basecount;
  events = [];
  converter:string;
  packsize: number;
  breakline: number;
  screenWidth: number;

constructor() {
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
}

  ngOnInit() {
    this.sequence = new Sequence();
    this.basecount = new Basecount(this.dna);
    this.getBasecount();
    this.dna = ""
    
  }

  getBasecount(){
    try{
      if(this.dna.match(/[^AUTCGautcg ]/))
    {
      document.getElementById("warning").style.visibility = "visible";
    } else {
      document.getElementById("warning").style.visibility = "hidden";    
    } 
    }catch(e){

    }
    this.basecount.getBaseCount(this.dna);
    this.basecount.getstrong_AVG();
    this.basecount.getweak_AVG();
  }
  
  stringCleanup() {
    if(this.dna.match(/[^AUTCGautcg ]/)){
      if(confirm("Invalid Characters")){
        this.dnaoutput = this.sequence.format(this.sequence.check(this.dna),this.packsize,this.breakline);
        this.tmpoutput = this.sequence.check(this.dna)
        this.converter = "String Cleanup";
      } else {
        this.clearInput();
      }
    } else {
        this.dnaoutput = this.sequence.format(this.sequence.check(this.dna),this.packsize,this.breakline);
        this.converter = "String Cleanup";
        this.tmpoutput = this.sequence.check(this.dna)

    }  
 
  }

dnarna() {
    this.dnaoutput = this.sequence.format(this.sequence.dnarna(this.dna), this.packsize, this.breakline);
    this.converter = "DNA <-> RNA";
    this.tmpoutput = this.sequence.dnarna(this.dna)

  }

  reverse() {
    this.dnaoutput = this.sequence.format(this.sequence.reverseSeq(this.dna), this.packsize, this.breakline);
    this.converter = "Reverse DNA"
    this.tmpoutput = this.sequence.reverseSeq(this.dna);
  }

  complement() {
    if(this.dna.includes("U") || this.dna.includes("u")){
      this.converter = "Complement RNA"
      this.dnaoutput = this.sequence.format(this.sequence.complementRNA(this.dna), this.packsize, this.breakline);
      this.tmpoutput = this.sequence.complementRNA(this.dna)

    } else {
    this.dnaoutput = this.sequence.format(this.sequence.complementSeq(this.dna), this.packsize, this.breakline);
    this.converter = "Complement DNA"
    this.tmpoutput = this.sequence.complementSeq(this.dna);
    }
  }

  reverseComplement() {
    if(this.dna.includes("U") || this.dna.includes("u")) {
      this.dnaoutput = this.sequence.format(this.sequence.reverseComplementRNA(this.dna), this.packsize, this.breakline);
      this.converter = "Reverse & Complement RNA"
      this.tmpoutput = this.sequence.reverseComplementRNA(this.dna)
      

    } else {
      this.dnaoutput = this.sequence.format(this.sequence.reverseComplement(this.dna), this.packsize, this.breakline);
      this.converter = "Reverse & Complement DNA"
      this.tmpoutput = this.sequence.reverseComplement(this.dna)
    }

  }

  strToAmino() {
    try{
    this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 0), 0,this.breakline);
    this.converter = "Generate 3-key Amino Acids"              
    this.tmpoutput = this.sequence.strToAmino(this.dna, 0)

    } catch(e){

    }
  }

  strTo1mino() {
    try{
    this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 1), this.packsize, this.breakline);
    this.converter = "Generate 1-key Amino Acids"   
    this.tmpoutput = this.sequence.strToAmino(this.dna, 1);
    } catch(e){
      
    }

  }

  format(pack, line) {
    this.dnaoutput = this.sequence.format(this.tmpoutput, pack, line);
  }



clearInput(){
  this.dna  = "";
  this.dnaoutput = "";
  this.basecount.clear();
}

complementRNA(){
  this.dnaoutput = this.sequence.complementRNA(this.dna);
}

}
