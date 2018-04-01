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
    


  constructor() {
  }

  ngOnInit() {
    this.sequence = new Sequence();
    this.basecount = new Basecount(this.dna);
    this.getBasecount();
    this.dna = " "
    
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
        this.converter = "String Cleanup";
      } else {
        this.clearInput();
      }
    } else {
        this.dnaoutput = this.sequence.format(this.sequence.check(this.dna),this.packsize,this.breakline);
        this.converter = "String Cleanup";
    }  
 
  }

  dnarna() {
        if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            this.dnaoutput = this.sequence.format(this.sequence.dnarna(this.dna), this.packsize, this.breakline);
            this.converter = "DNA <-> RNA";            
          } else {
            this.clearInput();
          }
        } else {
            this.dnaoutput = this.sequence.format(this.sequence.dnarna(this.dna), this.packsize, this.breakline);
            this.converter = "DNA <-> RNA";   
        }

  }

  reverse() {
      if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            this.dnaoutput = this.sequence.format(this.sequence.reverseSeq(this.dna), this.packsize, this.breakline);
            this.converter = "Reverse DNA"    
          } else {
            this.clearInput();
          }
        } else {
            this.dnaoutput = this.sequence.format(this.sequence.reverseSeq(this.dna), this.packsize, this.breakline);
            this.converter = "Reverse DNA"    
        }

  }

  complement() {
      if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            if(this.dna.includes("U") || this.dna.includes("u")){
              this.converter = "Complement RNA"
              this.dnaoutput = this.sequence.format(this.sequence.complementRNA(this.dna), this.packsize, this.breakline);
            } else {
              this.dnaoutput = this.sequence.format(this.sequence.complementSeq(this.dna), this.packsize, this.breakline);
              this.converter = "Complement DNA"
            }
      } else {
          this.clearInput();
        }
      } else {
            if(this.dna.includes("U") || this.dna.includes("u")){
              this.converter = "Complement RNA"
              this.dnaoutput = this.sequence.format(this.sequence.complementRNA(this.dna), this.packsize, this.breakline);
            } else {
              this.dnaoutput = this.sequence.format(this.sequence.complementSeq(this.dna), this.packsize, this.breakline);
              this.converter = "Complement DNA"
            }        
      }
  }

  reverseComplement() {
      if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            if(this.dna.includes("U") || this.dna.includes("u")) {
              this.dnaoutput = this.sequence.format(this.sequence.reverseComplementRNA(this.dna), this.packsize, this.breakline);
              this.converter = "Reverse & Complement RNA"
            } else {
              this.dnaoutput = this.sequence.format(this.sequence.reverseComplement(this.dna), this.packsize, this.breakline);
              this.converter = "Reverse & Complement DNA"
          }    
          } else {
            this.clearInput();
          }
        } else {
            if(this.dna.includes("U") || this.dna.includes("u")) {
              this.dnaoutput = this.sequence.format(this.sequence.reverseComplementRNA(this.dna), this.packsize, this.breakline);
              this.converter = "Reverse & Complement RNA"
            } else {
              this.dnaoutput = this.sequence.format(this.sequence.reverseComplement(this.dna), this.packsize, this.breakline);
              this.converter = "Reverse & Complement DNA"
            }
        }


  }

  strToAmino() {
      if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            try{
              this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 0), 0,this.breakline);
              this.converter = "Generate 3-key Amino Acids"      
            } catch(e){}
          } else {
            this.clearInput();
          }
        } else {
              this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 0), 0,this.breakline);
              this.converter = "Generate 3-key Amino Acids"      
        }


  }

  strTo1mino() {
      if(this.dna.match(/[^AUTCGautcg ]/)){
          if(confirm("Invalid Characters")){
            try{
              this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 1), this.packsize, this.breakline);
              this.converter = "Generate 1-key Amino Acids"
            } catch(e){}    
          } else {
            this.clearInput();
          }
        } else {
              this.dnaoutput = this.sequence.format(this.sequence.strToAmino(this.dna, 1), this.packsize, this.breakline);
              this.converter = "Generate 1-key Amino Acids"          
        }



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
  this.basecount.clear();
}

complementRNA(){
  this.dnaoutput = this.sequence.complementRNA(this.dna);
}

}
