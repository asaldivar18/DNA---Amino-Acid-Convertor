import { Component, OnInit } from '@angular/core';
import { Sequence } from '../sequence';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  dna: string;
  dnainput: string;
  tmpDna: string;
  i: number;
  splitDna: string[];
  list: number[];
  tmpNum: number;
  sequence: Sequence;


  constructor() {
  }
  ngOnInit() {
    this.sequence = new Sequence();
  }

  check() {
    const input = this.dna.split('\n');
    this.i = 0;
    const list = [];
    input.forEach(c => {
      if (c.match('^\>.*')) {
        list.push(this.i);
      }
      this.i++;
    });
    list.forEach(c => {
      input.splice(list[c], 1);
    });
    this.dna = input.join('\n')
    .toUpperCase()
    .replace(/[0-9]/g, '')
    .replace(/<\/?[^>]+(>|$)/g , '')
    .replace(/\r?\n|\r/g, '')
    .replace(/\s/g, '')
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/[^AUTCG]/g, 'X'); // warning
  }

  dnarna() {
    this.tmpDna = this.dna
    .split('').map(function(el) {
      switch (el) {
        case 'T': return 'U';
        case 'U': return 'T';
        default: return el;
      }
    })
    .join('');
    this.dna = this.tmpDna;
  }

  reverse() {
    this.dna = this.dna.split('').reverse().join('');
  }

  complement() {
    this.tmpDna = this.dna
    .split('')
    .map(function(el) {
      switch (el) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
        case 'U': return 'A';
      }
    })
    .join('');
    this.dna = this.tmpDna;
  }

  reverseComplement() {
    this.reverse();
    this.complement();
  }

}
