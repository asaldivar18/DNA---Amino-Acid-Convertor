
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
    isDNA: boolean;
    packsize: number;
    breakline: number;


    constructor() {

    }

    check(sequence:string) {
        const input = sequence.split('\n');
        let i = 0;
      try{

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
      } catch(a){

      }

       
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
      const input = this.check(sequence.split('').map(function(el) {
                  switch (el) {
                    case 'T': return 'U';
                    case 'U': return 'T'; //showerrror
                    case 't': return 'u';
                    case 'u': return 't';
                    default: return el;
                  }
      }).join(''));
      return input;
    }
	
	rna_dna(sequence){

		 const input = this.check(sequence.split('').map(function(el){
			switch(el){
				case 'A': return 'U'
				case 'G': return 'C'
				case 'U': return 
			}
		}).join(''));
	}

    reverseSeq(sequence:string) {
      const input = this.check(sequence.split('').reverse().join(''));
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
                //case 'U': return 'A';
                case 'a': return 't';
                case 't': return 'a';
                case 'g': return 'c';
                case 'c': return 'g';
                //case 'u': return 'u';
              }
            })
            .join('');
    return this.check(input);
  }
  
  complementRNA(sequence){
          const input = sequence
            .split('')
            .map(function(el) {
              switch (el) {
                case 'A': return 'U';
                //case 'T': return 'A';
                case 'G': return 'C';
                case 'C': return 'G';
                case 'U': return 'A';
                
                case 'a': return 'u';
                //case 't': return 'a';
                case 'g': return 'c';
                case 'c': return 'g';
                case 'u': return 'a';
              }
            })
            .join('');
    return this.check(input);
  }
    
    reverseComplement(sequence) {
            let tmpDna = this.reverseSeq(sequence);
            tmpDna =  this.complementSeq(tmpDna);

            return tmpDna
    }

    reverseComplementRNA(sequence) {
      let tmpDna = this.reverseSeq(sequence);
      tmpDna =  this.complementRNA(tmpDna);
      return tmpDna
}


    format(sequence, pack, line) {
      this.packsize = pack;
      this.breakline = line;
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

strToAmino(sequence, arg) {
      var i = (arg == 0? 0 : 1);
      sequence = this.check(sequence);
      const list = [
      ["Phe ", "F"],
      ["Leu ", "L"],
      ["Ile " , "I"],
      ["Met ", "M"],
      ["Val ", "V"],
      ["Ser ", "S"],
      ["Pro ", "P"],
      ["Thr ", "T"],
      ["Ala ", "A"],
      ["Tyr ", "Y"],
      ["* ", "*"],
      ["His ", "H"],
      ["Gln ", "Q"],
      ["Asn ", "N"],
      ["Lys ", "K"],
      ["Asp ", "D"],
      ["Glu ", "E"],
      ["Cys ", "C"],
      ["Trp ", "W"],
      ["Arg ", "R"],
      ["Gly ", "G"],
      [" ", ""]
      ];
      const input = sequence.match(/[\s\S]{1,3}/g || []).map(
            function(el) {
              switch (el) {
                case 'UUU' : return list[0][i];
                case 'TTT' : return list[0][i];
                case 'UUC' : return list[0][i];
                case 'TTC' : return list[0][i];

                case 'UUA' : return list[1][i];
                case 'TTA' : return list[1][i];
                case 'UUG' : return list[1][i];
                case 'TTG' : return list[1][i];

                case 'CUU' : return list[1][i];
                case 'CTT' : return list[1][i];
                case 'CUC' : return list[1][i];
                case 'CTC' : return list[1][i];
                case 'CUA' : return list[1][i];
                case 'CTA' : return list[1][i];
                case 'CUG' : return list[1][i];
                case 'CTG' : return list[1][i];

                case 'AUU' : return list[2][i];
                case 'ATT' : return list[2][i];
                case 'AUC' : return list[2][i];
                case 'ATC' : return list[2][i];
                case 'AUA' : return list[2][i];
                case 'ATA' : return list[2][i];
                case 'AUG' : return list[3][i];
                case 'ATG' : return list[3][i];

                case 'GUU' : return list[4][i];
                case 'GTT' : return list[4][i];
                case 'GUC' : return list[4][i];
                case 'GTC' : return list[4][i];
                case 'GUA' : return list[4][i];
                case 'GTA' : return list[4][i];
                case 'GUG' : return list[4][i];
                case 'GTG' : return list[4][i];

                case 'UCU' : return list[5][i];
                case 'TCT' : return list[5][i];
                case 'UCC' : return list[5][i];
                case 'TCC' : return list[5][i];
                case 'UCA' : return list[5][i];
                case 'TCA' : return list[5][i];
                case 'UCG' : return list[5][i];
                case 'TCG' : return list[5][i];

                case 'CCU' : return list[6][i];
                case 'CCT' : return list[6][i];
                case 'CCC' : return list[6][i];
                case 'CCA' : return list[6][i];
                case 'CCG' : return list[6][i];

                case 'ACU' : return list[7][i];
                case 'ACT' : return list[7][i];
                case 'ACC' : return list[7][i];
                case 'ACA' : return list[7][i];
                case 'ACG' : return list[7][i];
                
                case 'GCT' : return list[8][i];
                case 'GCU' : return list[8][i];
                case 'GCC' : return list[8][i];
                case 'GCA' : return list[8][i];
                case 'GCG' : return list[8][i];

                case 'UAU' : return list[9][i];
                case 'TAT' : return list[9][i];
                case 'UAC' : return list[9][i];
                case 'TAC' : return list[9][i];
                case 'UAA' : return list[10][i];
                case 'TAA' : return list[10][i];
                case 'UAG' : return list[10][i];
                case 'TAG' : return list[10][i];

                case 'CAU' : return list[11][i];
                case 'CAT' : return list[11][i];
                case 'CAC' : return list[11][i];
                case 'CAA' : return list[12][i];
                case 'CAG' : return list[12][i];

                case 'AAT' : return list[13][i];
                case 'AAU' : return list[13][i];
                case 'AAC' : return list[13][i];
                case 'AAA' : return list[14][i];
                case 'AAG' : return list[14][i];

                case 'GAT' : return list[15][i];
                case 'GAU' : return list[15][i];
                case 'GAC' : return list[15][i];
                case 'GAA' : return list[16][i];
                case 'GAG' : return list[16][i];

                case 'TGT' : return list[17][i];
                case 'UGU' : return list[17][i];
                case 'TGC' : return list[17][i];
                case 'UGC' : return list[17][i];
                case 'UGA' : return list[10][i];
                case 'TGA' : return list[10][i];
                case 'UGG' : return list[18][i];
                case 'TGG' : return list[18][i];
       
                case 'CGU' : return list[19][i];
                case 'CGT' : return list[19][i];
                case 'CGC' : return list[19][i];
                case 'CGA' : return list[19][i];
                case 'CGG' : return list[19][i];

                case 'AGT' : return list[5][i];
                case 'AGU' : return list[5][i];
                case 'AGC' : return list[5][i];
                case 'AGA' : return list[19][i];
                case 'ACG' : return list[19][i];

                case 'GGT' : return list[20][i];
                case 'GGU' : return list[20][i];
                case 'GGC' : return list[20][i];
                case 'GGA' : return list[20][i];
                case 'GGG' : return list[20][i];
                case 'AGG' : return list[19][i];
                default : return  el + list[21][i];
              }
            }
      ).join('');

      return input;
    }
}
