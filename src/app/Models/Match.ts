import { Team } from './Team';
import { Commentry } from './Commentary';

export class Match {
    
    readonly decision_batting=1;
    readonly decision_bowling=2;
    private toss:string;
    private team1Name:string;
    private team2Name:string;
    private team1:Team;
    private team2:Team;
    private tossWinBy:string;
    private decision:number;
    private numberOfOvers:number;
    private flag:boolean=true;
    private team1TotalRuns: number=0;
    private team2TotalRuns: number=0;
    public commentryDetailsArray:Array<Commentry>=[];
    public runDetailsArray:Array<Commentry>=[];
    
    setTeamName(team1Name:string,team2Name:string) {
        this.team1Name=team1Name;
        this.team2Name=team2Name;
        this.team1= new Team();
        this.team2=new Team();
        console.log(this.team1Name);
        console.log(this.team2Name);
    }
    
    setTossWinningTeam(teamName:string, decision:number):boolean {
        this.tossWinBy=teamName;
        this.decision=decision;
        console.log(this.tossWinBy);
        console.log(this.decision);
        return true;
    }
    
    setOversForMatch(overs:number) {
        this.numberOfOvers=overs;
        console.log(this.numberOfOvers);
    }
    
    getTeam1Name() {
        return this.team1Name;
    }
    
    getTeam2Name() {
        return this.team2Name;
    }
    
    setTeam1(team1p:Team)
    {
        this.team1 = team1p;
    }
    
    getTeam1() {
        return this.team1;
    }
    
    getTeam2() {
        return this.team2;
    }
    
    saveCommentryDetails(
        onStrikeBatsmanName,
        nonStrikeBatsmanName,
        bowlerName,
        balls,
        runsPerBall,
        wicketType,
        catchBy,
        runOutBy,
        numberOfOvers,
        commentry
        ) {
            this.commentryDetailsArray.push(
                new Commentry(
                    onStrikeBatsmanName,
                    nonStrikeBatsmanName,
                    bowlerName,
                    balls,
                    runsPerBall,
                    wicketType,
                    catchBy,
                    runOutBy,
                    numberOfOvers,
                    commentry)
                    );
                    console.log(this.commentryDetailsArray);
                }
                
                getCommentry() {
                    return this.commentryDetailsArray;
                }
                
                saveRunDetails(
                    onStrikeBatsmanName,
                    nonStrikeBatsmanName,
                    bowlerName,
                    balls,
                    runsPerBall,
                    wicketType,
                    catchBy,
                    runOutBy,
                    numberOfOvers,
                    commentry
                    ) {
                        this.runDetailsArray.push(
                            new Commentry(
                                onStrikeBatsmanName,
                                nonStrikeBatsmanName,
                                bowlerName,
                                balls,
                                runsPerBall,
                                wicketType,
                                catchBy,
                                runOutBy,
                                numberOfOvers,
                                commentry)
                                );
                                console.log(this.runDetailsArray);
                            }
                            
                            setTeam1TotalRuns(team1TotalRuns) {
                                this.team1TotalRuns=team1TotalRuns;
                            }
                            
                            getTeam1TotalRuns() {
                                return this.team1TotalRuns;
                            }
                            
                            setTeam2TotalRuns(team2TotalRuns) {
                                this.team2TotalRuns=team2TotalRuns;
                            }
                            
                            getTeam2TotalRuns() {
                                return this.team2TotalRuns
                            }
                            
                            // getBattingTeam(){
                            //     if(this.toss==this.team1Name && this.decision==this.decision_batting)
                            //     {
                            //     return this.team1;
                            //     }
                            //     else{
                            //     return this.team2;
                            //     }
                            //     }
                            //     /**
                            //     * @description if team1 won the toss and choose balling then this function returns 
                            //     * team1 is balling team otherwise team2 is a balling team.
                            
                            //     */
                            //     getBallingTeam(){
                            //     if(this.toss==this.team1Name && this.decision==this.decision_bowling)
                            //     {
                            //     return this.team1;
                            //     }
                            //     else{
                            //     return this.team2;
                            //     }
                            //     }
                        }