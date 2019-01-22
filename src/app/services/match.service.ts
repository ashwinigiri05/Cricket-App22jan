import { Injectable } from '@angular/core';
import { Match } from '../Models/Match';

@Injectable({
    providedIn: 'root'
})
export class MatchService {
    
    readonly MATCH_STATE_NOT_STARTED      = 0;
    readonly MATCH_STATE_MATCH_DEFINED    = 1;
    readonly MATCH_STATE_TEAMS_DEFINED    = 2;
    readonly MATCH_STATE_INNING1_STARTED  = 3;
    readonly MATCH_STATE_INNING1_END      = 4;
    readonly MATCH_STATE_INNING2_STARTED  = 5;
    readonly MATCH_STATE_INNING2_END      = 6;
    readonly MATCH_STATE_MATCH_FINISHED   = 7;
    
    private match:Match;
    private matchState:number;
    
    constructor() { 
        this.match=new Match();
        this.matchState=this.MATCH_STATE_NOT_STARTED;
    }
    
    getMatchState():number {
        return this.matchState;
    }
    
    setMatchState() {
        this.matchState++;
    }
    
    getMatch() {
        return this.match;
    }
}