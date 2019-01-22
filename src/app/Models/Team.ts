import { Player } from './Players';

export class Team{
    
    players:Array<Player>;
    constructor(){
        this.players = [];
        for (let index = 0; index < 11; index++) {
            
            const player=new Player();
            this.players.push(player);
            console.log(this.players);
        }
        
    }
    isTeamCompleted():Boolean{
        if(this.players.length === 11){
            return true;
        }
        return false;
    }
    
    getPlayerName(){
        return this.players;
    }
    
}