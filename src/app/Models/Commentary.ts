    export class Commentry {
        private onStrikeBatsmanName:string;
        private nonStrikeBatsmanName:string;
        private bowlerName:string;
        private balls:number;
        private runsPerBall:number;
        private wicketType:string;
        private catchBy: string;
        private runOutBy: string;
        private numberOfOvers: number;
        private commentry: string;
        
        constructor(
            onStrikeBatsmanName:string,
            nonStrikeBatsmanName:string,
            bowlerName:string,
            balls:number,
            runsPerBall:number,
            wicketType:string,
            catchBy: string,
            runOutBy: string,
            numberOfOvers: number,
            commentry: string
            ) {
        
                this.onStrikeBatsmanName=onStrikeBatsmanName;
                this.nonStrikeBatsmanName=nonStrikeBatsmanName;
                this.bowlerName=bowlerName;
                this.balls=balls;
                this.runsPerBall=runsPerBall;
                this.wicketType=wicketType;
                this.catchBy=catchBy;
                this.runOutBy=runOutBy;
                this.numberOfOvers=numberOfOvers;
                this.commentry=commentry;
        }
        
        setOnStrikeBatsmanName(onStrikeBatsmanName:string) {
        this.onStrikeBatsmanName=onStrikeBatsmanName;
        }
        
        setNonStrikeBatsmanName(nonStrikeBatsmanName:string) {
        this.nonStrikeBatsmanName=nonStrikeBatsmanName;
        }
        
        setBowlerName(bowlerName:string) {
        this.bowlerName=bowlerName;
        }
        
        setBalls(balls:number) {
        this.balls=balls;
        }
        
        setRunsPerBall(runsPerBall:number) {
        this.runsPerBall=runsPerBall;
        }
        
        setWicketType(wicketType:string) {
        this.wicketType=wicketType;
        }
        
        setCatchBy (catchBy:string) {
        this.catchBy=catchBy;
        }
        
        setRunOutBy (runOutBy:string) {
        this.runOutBy=runOutBy;
        }
        
        setNumberOfOvers(numberOfOvers:number) {
        this.numberOfOvers=numberOfOvers;
        }
        
        setCommentry(commentry:string) {
        this.commentry=commentry;
        }
        
        getOnStrikeBatsmanName() {
        return this.onStrikeBatsmanName;
        }
        
        getNonStrikeBatsmanName() {
        return this.nonStrikeBatsmanName;
        }
        
        getBowlerName() {
        return this.bowlerName;
        }
        
        getBalls() {
        return this.balls;
        }
        
        getRunsPerBall() {
        return this.runsPerBall;
        }
        
        getWicketType() {
        return this.wicketType;
        }
        
        getCatchBy() {
        return this.catchBy;
        }
        
        getRunOutBy() {
        return this.runOutBy;
        }
        
        getNumberOfOvers() {
        return this.numberOfOvers;
        }
        
        getCommentry() {
        return this.commentry;
        }
        }