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

}
