export class Basecount {
    aCount: number;
    tCount: number;
    gCount: number;
    cCount: number;
    total: number;
    weakH: number;
    strongH: number;
    constructor() {
        this.aCount = 0;
        this.tCount = 0;
        this.gCount = 0;
        this.cCount = 0;
        this.weakH = 0;
        this.strongH = 0;
    }

    updateBaseCount(sequence) {
        console.log(sequence);
        const input = sequence.split('').forEach(element => {
          switch (element) {
            case 'A': this.aCount++;
            return element;
            case 'T': this.tCount++;
            return element;
            case 'G': this.gCount++;
            return element;
            case 'C': this.cCount++;
            return element;
          }
        });
        this.total = sequence.length;
        this.weakH = ((this.aCount + this.tCount) / this.total) * 100;
        this.strongH = ((this.gCount + this.cCount) / this.total) * 100;

    }

}
