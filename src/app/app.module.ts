import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';

import { ScorcardComponent } from './scorcard/scorcard.component';

import { CommentaryComponent } from './commentary/commentary.component';
import { AdminComponent } from './admin/admin.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { TeamComponent } from './admin/team/team.component';
import { InningComponent } from './admin/inning/inning.component';
import { PlayersComponent } from './admin/team/players/players.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ScorcardComponent,
   
    CommentaryComponent,
   
    AdminComponent,
   
    NewmatchComponent,
   
    TeamComponent,
   
    InningComponent,
   
    PlayersComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
