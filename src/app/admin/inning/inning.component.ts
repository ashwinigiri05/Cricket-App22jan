import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inning',
  templateUrl: './inning.component.html',
  styleUrls: ['./inning.component.css']
})
export class InningComponent implements OnInit {
  
  onStrikeBatsmanName:string;
  nonStrikeBatsmanName:string;
  bowlerName:string;
  balls:number;
  currentBall=0;
  currentOver=0;
  runsPerBall:number;
  runOutBy: string;
  wicketType:string;
  catchBy: string;
  numberOfOvers: number;
  commentry: string;
  
  @ViewChild('ball') ballInTS: ElementRef;
  @ViewChild('over') overInTS: ElementRef;
  
  constructor( 
    public matchService: MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) { 
      console.log(this.matchService.getMatch().getTeam1());
      console.log(this.matchService.getMatch().getTeam2());
    }
    
    
    ngOnInit() {
    }
    
    
    onAddScoreClick(){
      
      // this.currentBall++;
      // if (this.currentBall > 6) {
      //   this.currentBall = 1;
      //   this.currentOver++;
      //   if(this.currentOver < this.matchService.getMatch().getNumberOfOvers(){
      //   }
      //   else{
      //     this.matchService.getMatch().setInningFinshedMessage("First Inning Finished !!");
      //     console.log("1st finsished");
      //     this.currentBall = 0;
      //     this.currentOver = 0;
      
      //   }
      // }
      this.matchService.getMatch().saveCommentryDetails
      (
        this.onStrikeBatsmanName,
        this.nonStrikeBatsmanName,
        this.bowlerName,
        this.currentBall,
        this.runsPerBall,
        this.wicketType,
        this.catchBy,
        this.runOutBy,
        this.currentOver,
        this.commentry
        
        );
        console.log(this.commentry);
      }
    }
    