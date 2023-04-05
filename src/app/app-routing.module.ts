import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashbordComponent} from "./pages/page-dashbord/page-dashbord.component";
import {PageStatistiqueComponent} from "./pages/page-statistique/page-statistique.component";

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
  {path:'',component:PageDashbordComponent,
    children:[
      {path:'statistique',component:PageStatistiqueComponent}
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
