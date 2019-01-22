import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor( 
    private matchService:MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    
    ngOnInit() {
      switch (this.matchService.getMatchState()) {
        case (this.matchService.MATCH_STATE_NOT_STARTED):
          this.router.navigate(['/admin','newmatch']);
          break;
        case(this.matchService.MATCH_STATE_MATCH_DEFINED):
          this.router.navigate(['/admin','team']);
          break;
        case(this.matchService.MATCH_STATE_TEAMS_DEFINED):
          this.router.navigate(['/admin','inning']);
          break;
      }
    }
    
  }