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
                })
                .join('');
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
}
