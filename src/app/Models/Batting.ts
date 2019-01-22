export class Batting{
    
    private didNotBat:boolean;
    private runs:number;
    private balls:number;
    private out:string;
    private batsmanOnStrike:boolean;
    private bastsmanOnNonstrike:boolean;
    
    constructor() {
        this.didNotBat=true;
    }
    
    startBatting() {
        this.didNotBat=false;
        this.balls=0;
        this.runs=0;
        this.out='Not Out';
    }
    
    playedNoRun() {
        this.runs;
        this.balls++;
    }
    
    playedSingleRun() {
        this.runs++;
        this.balls++;
    }
    
    playedDoubleRun() {
        this.runs+=2;
        this.balls++;
    }
    
    playedThreeRun() {
        this.runs+=3;
        this.balls++;
    }
    
    playedFourRun() {
        this.runs+=4;
        this.balls++;
    }
    
    playedSixRun() {
        this.runs+=6;
        this.balls++;
    }
    
    playerOutOnBall() {
        this.balls++;
    }
}