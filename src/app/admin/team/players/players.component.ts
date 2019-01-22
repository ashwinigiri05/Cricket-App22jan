import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/Models/Players';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  ngOnInit() { }
  
  @Input() player: Player;
  @Input() index: number;
  
  constructor( 
    private matchService: MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    
    setPlayersName(event){
      const element:HTMLInputElement = event.target;
       this.player.setPlayersName(element.value);
      //console.log(element.value);
     }
    
  }
  