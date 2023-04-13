import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashbordComponent} from "./pages/page-dashbord/page-dashbord.component";
import {PageStatistiqueComponent} from "./pages/page-statistique/page-statistique.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {NouveauClientFournisseurComponent} from "./composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouveauCmdCltFrsComponent} from "./composants/nouveau-cmd-clt-frs/nouveau-cmd-clt-frs.component";
import {PageCategorieComponent} from "./pages/categorie/page-categorie/page-categorie.component";

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
  {path:'',component:PageDashbordComponent,
    children:[
      {path:'statistiques',component:PageStatistiqueComponent},
      {path:'articles',component:PageArticleComponent},
      {path:'nouvelarticles',component:NouvelArticleComponent},
      {path:'mvtstk',component:PageMvtstkComponent},
      {path:'clients',component:PageClientComponent},
      {path:'commandesclient',component:PageCmdCltFrsComponent},
      {path:'nouvellecommandesclient',component:NouveauCmdCltFrsComponent},
      {path:'nouveauclient',component:NouveauClientFournisseurComponent},
      {path:'fournisseurs',component:PageFournisseurComponent},
      {path:'commandesfournisseur',component:PageCmdCltFrsComponent},
      {path:'nouvellecommandesfournisseur',component:NouveauCmdCltFrsComponent},
      {path:'nouveaufournisseur',component:NouveauClientFournisseurComponent},
      {path:'categories',component:PageCategorieComponent},
      {path:'nouvelleCategorie',component:NouveauClientFournisseurComponent},
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
