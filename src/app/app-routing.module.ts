import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorcardComponent } from './scorcard/scorcard.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { AdminComponent } from './admin/admin.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { TeamComponent } from './admin/team/team.component';
import { InningComponent } from './admin/inning/inning.component';


const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path:'newmatch',component:NewmatchComponent},
      //{path:'DefineTeams',component:TeamComponent},
      {path:'team',component:TeamComponent},
      {path:'inning',component:InningComponent}
    ],
  },  
  { 
    path:'scorcard' , 
    component:ScorcardComponent
  },
  {
    path:'commentary',
    component:CommentaryComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

