class  Basecount {
  aCount: number;
  tCount: number;
  gCount: number;
  cCount: number;
}

export class Sequence {
    dna: string;
    errors: boolean;
    rnadna: string;
    reverse: string;
    complement: string;
    reversecomplement: string;
    baseCount: Basecount;


    constructor() {
    }

    check(sequence) {
        const input = sequence.split('\n');
        let i = 0;
        const list = [];
        input.forEach(c => {
            if (c.match('^\>.*$')) {
                list.push(i);
            }
            i++;
        });
        list.forEach(c => {
            input.splice(list[c], 1);
            });
      return input.join('\n')
                        .toUpperCase()
                        .replace(/^\>.*$/g, '')
                        .replace(/[0-9]/g, '')
                        .replace(/<\/?[^>]+(>|$)/g , '')
                        .replace(/\r?\n|\r/g, '')
                        .replace(/\s/g, '')
                        .replace(/[^a-zA-Z ]/g, '')
                        .replace(/[^AUTCG]/g, 'X'); // warning
          }

    dnarna(sequence) {
      const input = sequence.split('').map(function(el) {
                  switch (el) {
                    case 'T': return 'U';
                    case 'U': return 'T';
                    default: return el;
                  }
      }).join('');
      return input;
    }

    reverseSeq(sequence) {
      const input = sequence.split('').reverse().join('');
      return input;
    }

    complementSeq(sequence) {
      const input = sequence
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
    return input;
    }
    
    reverseComplement(sequence) {
            const tmpDna = this.reverseSeq(sequence);
            return this.complementSeq(tmpDna);
    }

    format(sequence, pack, line) {
      let i = 1;
      const input = sequence.split('').map(function(el) {
        switch (el) {
          default: 
            if (i % line == 0) {
              i++;
              return el + '\n';
            }
            else if (i % pack == 0) {
              i++;
              return el + ' ';
            }
            else {
              i++;
              return el;
            }
          }
      }).join('');
      return input;
    }

    strToAmino(sequence) {
      sequence = this.check(sequence);
      const list = ["Phe ", "Leu ", "Ile ", "Met ", 
                    "Val ", "Ser ", "Pro ", "Thr ",
                    "Ala ", "Tyr ", "Stop ", "His ",
                    "Gln ", "Asn ", "Lys ", "Asp ",
                    "Glu ", "Cys ", "Trp ", "Arg ", "Gly "];
                    /*sequence.split('').map(function(el)*/
                    /*sequence.upperCase.match(/[\s\S]{1,3}/g || [])*/
      const input = sequence.match(/[\s\S]{1,3}/g || []).map(
            function(el) {
              switch (el) {
                case 'UUU' : return list[0];
                case 'UUC' : return list[0];
                case 'UUA' : return list[1];
                case 'UUG' : return list[1];

                case 'CUU' : return list[1];
                case 'CUC' : return list[1];
                case 'CUA' : return list[1];
                case 'CUG' : return list[1];

                case 'AUU' : return list[2];
                case 'AUC' : return list[2];
                case 'AUA' : return list[2];
                case 'AUG' : return list[3];

                case 'GUU' : return list[4];
                case 'GUC' : return list[4];
                case 'GUA' : return list[4];
                case 'GUG' : return list[4];

                case 'UCU' : return list[5];
                case 'UCC' : return list[5];
                case 'UCA' : return list[5];
                case 'UCG' : return list[5];

                case 'CCU' : return list[6];
                case 'CCC' : return list[6];
                case 'CCA' : return list[6];
                case 'CCG' : return list[6];

                case 'ACU' : return list[7];
                case 'ACC' : return list[7];
                case 'ACA' : return list[7];
                case 'ACG' : return list[7];
                
                case 'GCU' : return list[8];
                case 'GCC' : return list[8];
                case 'GCA' : return list[8];
                case 'GCG' : return list[8];

                case 'UAU' : return list[9];
                case 'UAC' : return list[9];
                case 'UAA' : return list[10];
                case 'UAG' : return list[10];

                case 'CAU' : return list[11];
                case 'CAC' : return list[11];
                case 'CAA' : return list[12];
                case 'CAG' : return list[12];

                case 'AAU' : return list[13];
                case 'AAC' : return list[13];
                case 'AAA' : return list[14];
                case 'AAG' : return list[14];

                case 'GAU' : return list[15];
                case 'GAC' : return list[15];
                case 'GAA' : return list[16];
                case 'GAG' : return list[16];

                case 'UGU' : return list[17];
                case 'UGC' : return list[17];
                case 'UGA' : return list[10];
                case 'UGG' : return list[18];
       
                case 'CGU' : return list[19];
                case 'CGC' : return list[19];
                case 'CGA' : return list[19];
                case 'CGG' : return list[19];

                case 'AGU' : return list[5];
                case 'AGC' : return list[5];
                case 'AGA' : return list[19];
                case 'ACG' : return list[19];

                case 'GGU' : return list[20];
                case 'GGC' : return list[20];
                case 'GGA' : return list[20];
                case 'GGG' : return list[20];
              }
            }
      ).join('');
      return input;
    }

    strTo1mino(sequence) {
      sequence = this.check(sequence);
      const list = ["F", "L", "I", "M", 
                    "V", "S", "P", "T",
                    "A", "Y", "Stop", "H",
                    "Q", "N", "K", "D",
                    "E", "C", "W", "R", "G"];
                    /*sequence.split('').map(function(el)*/
                    /*sequence.upperCase.match(/[\s\S]{1,3}/g || [])*/
      const input = sequence.match(/[\s\S]{1,3}/g || []).map(
            function(el) {
              switch (el) {
                case 'UUU' : return list[0];
                case 'UUC' : return list[0];
                case 'UUA' : return list[1];
                case 'UUG' : return list[1];

                case 'CUU' : return list[1];
                case 'CUC' : return list[1];
                case 'CUA' : return list[1];
                case 'CUG' : return list[1];

                case 'AUU' : return list[2];
                case 'AUC' : return list[2];
                case 'AUA' : return list[2];
                case 'AUG' : return list[3];

                case 'GUU' : return list[4];
                case 'GUC' : return list[4];
                case 'GUA' : return list[4];
                case 'GUG' : return list[4];

                case 'UCU' : return list[5];
                case 'UCC' : return list[5];
                case 'UCA' : return list[5];
                case 'UCG' : return list[5];

                case 'CCU' : return list[6];
                case 'CCC' : return list[6];
                case 'CCA' : return list[6];
                case 'CCG' : return list[6];

                case 'ACU' : return list[7];
                case 'ACC' : return list[7];
                case 'ACA' : return list[7];
                case 'ACG' : return list[7];
                
                case 'GCU' : return list[8];
                case 'GCC' : return list[8];
                case 'GCA' : return list[8];
                case 'GCG' : return list[8];

                case 'UAU' : return list[9];
                case 'UAC' : return list[9];
                case 'UAA' : return list[10];
                case 'UAG' : return list[10];

                case 'CAU' : return list[11];
                case 'CAC' : return list[11];
                case 'CAA' : return list[12];
                case 'CAG' : return list[12];

                case 'AAU' : return list[13];
                case 'AAC' : return list[13];
                case 'AAA' : return list[14];
                case 'AAG' : return list[14];

                case 'GAU' : return list[15];
                case 'GAC' : return list[15];
                case 'GAA' : return list[16];
                case 'GAG' : return list[16];

                case 'UGU' : return list[17];
                case 'UGC' : return list[17];
                case 'UGA' : return list[10];
                case 'UGG' : return list[18];
       
                case 'CGU' : return list[19];
                case 'CGC' : return list[19];
                case 'CGA' : return list[19];
                case 'CGG' : return list[19];

                case 'AGU' : return list[5];
                case 'AGC' : return list[5];
                case 'AGA' : return list[19];
                case 'ACG' : return list[19];

                case 'GGU' : return list[20];
                case 'GGC' : return list[20];
                case 'GGA' : return list[20];
                case 'GGG' : return list[20];
              }
            }
      ).join('');
      return input;
    }
}
