import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  constructor(  public matchService: MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) {
      console.log(matchService.getMatch().getTeam1Name());
    }
    
    ngOnInit() {
    }
    
    onStartInningClick(){
      if(this.matchService.getMatch().getTeam1().isTeamCompleted()){
        this.matchService.setMatchState();
        this.router.navigate(['/admin','inning']);
      }
    }
  }
  