import { Component, OnInit } from '@angular/core';
import { Sequence } from '../sequence';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  dna: string;
  sequence: Sequence;


  constructor() {
  }
  ngOnInit() {
    this.sequence = new Sequence();
  }

  stringCleanup() {
    this.dna = this.sequence.check(this.dna);
  }

  dnarna() {
    this.dna = this.sequence.dnarna(this.dna);
  }

  reverse() {
    this.dna = this.sequence.reverseSeq(this.dna);
  }

  complement() {
    this.dna = this.sequence.complementSeq(this.dna);
  }

  reverseComplement() {
    this.dna = this.sequence.reverseComplement(this.dna);
  }

}
