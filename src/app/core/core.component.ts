import { Component, OnInit } from '@angular/core';
import { Sequence } from '../sequence';
import { Basecount } from '../basecount';


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

  constructor() {
  }

  ngOnInit() {
    this.sequence = new Sequence();
    this.basecount = new Basecount(this.dna);
    this.getBasecount();
  }

  getBasecount(){
    this.basecount.getBaseCount(this.dna);
    this.basecount.getstrong_AVG();
    this.basecount.getweak_AVG();
  }
  
  stringCleanup() {
    this.dnaoutput = this.sequence.check(this.dna);
  }

  dnarna() {
    this.dnaoutput = this.sequence.dnarna(this.dna);
  }

  reverse() {
    this.dnaoutput = this.sequence.reverseSeq(this.dna);
  }

  complement() {
    this.dnaoutput = this.sequence.complementSeq(this.dna);
  }

  reverseComplement() {
    this.dnaoutput = this.sequence.reverseComplement(this.dna);
  }

  strToAmino() {
    this.dnaoutput = this.sequence.strToAmino(this.dna, 0);
  }

  strTo1mino() {
    this.dnaoutput = this.sequence.strToAmino(this.dna, 1);
  }

  format(pack, line) {
    this.dnaoutput = this.sequence.check(this.dna);
    this.dnaoutput = this.sequence.format(this.dnaoutput, pack, line);
  }


  pack() {
    var format = document.forms[0];
    var val;
    for (var i = 0; i < format.length; i++) {
        if (format[i].checked) {
            val = format[i].value;
        }
    }
    return val;
  }

  line() {
    var format2 = document.forms[1];
    var val;
    for (var i = 0; i < format2.length; i++) {
        if (format2[i].checked) {
            val = format2[i].value;
        }
    }
    return val;
  }


clearInput(){
  this.dna  = "";
  this.dnaoutput = "";
}

}
