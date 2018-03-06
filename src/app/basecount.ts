
export class Basecount {
    aCount: number;
    tCount: number;
    gCount: number;
    cCount: number;
    sequence: string;  
    strong_AVG: number;
    weak_AVG: number;

    constructor(userinput){
        this.aCount = 0;
        this.tCount =0;
        this.gCount = 0;
        this.cCount= 0;
        this.strong_AVG= 0;
        this.weak_AVG=0;
    }
    
    getweak_AVG(){this.weak_AVG= Math.round(((this.aCount +this.tCount) / (this.aCount +this.tCount +this.gCount +this.cCount)) * 100)};

    getstrong_AVG(){this.strong_AVG= Math.round(( (this.gCount +this.cCount) / (this.aCount +this.tCount +this.gCount +this.cCount)) * 100)}

    countA(userinput){
        this.aCount=this.aCount
    }

    clear(){
        this.aCount = 0;
        this.tCount =0;
        this.gCount = 0;
        this.cCount= 0;
        this.strong_AVG= 0;
        this.weak_AVG=0;
    }
    getBaseCount(userinput)
    {
        this.clear();
        try{
        userinput.split('').forEach(el => {
            if(el == 'A' || el == 'a') 
                this.aCount++;
            if(el =='T' || el == 't')
                this.tCount++;
            if(el =='C' || el == 'c')
                this.cCount++;
            if(el =='G' || el == 'g')
                this.gCount++;
        })
        }catch(e){

        }

  }
  
}
