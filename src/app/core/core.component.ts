import { Component, OnInit } from '@angular/core';
import { Sequence } from '../sequence';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  dna: string;
  dnaoutput: string;
  sequence: Sequence;


  constructor() {
  }
  ngOnInit() {
    this.sequence = new Sequence();
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
