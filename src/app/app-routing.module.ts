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
import {NouvelCategorieComponent} from "./pages/categorie/nouvel-categorie/nouvel-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfileComponent} from "./pages/profil/page-profile/page-profile.component";
import {ChangePassComponent} from "./pages/profil/change-pass/change-pass.component";
import {ApplicationGardService} from "./service/guard/application-gard.service";

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
  {path:'',component:PageDashbordComponent,canActivate:[ApplicationGardService],
    children:[
      {path:'statistiques',component:PageStatistiqueComponent,canActivate:[ApplicationGardService]},
      {path:'articles',component:PageArticleComponent,canActivate:[ApplicationGardService]},
      {path:'nouvelarticles',component:NouvelArticleComponent,canActivate:[ApplicationGardService]},
      {path:'nouvelarticles/:idArticle',component:NouvelArticleComponent,canActivate:[ApplicationGardService]},
      {path:'mvtstk',component:PageMvtstkComponent,canActivate:[ApplicationGardService]},
      {path:'clients',component:PageClientComponent,canActivate:[ApplicationGardService]},
      {path:'commandesclient',component:PageCmdCltFrsComponent,canActivate:[ApplicationGardService],data:{origin:'client'}},
      {path:'nouvellecommandeclt',component:NouveauCmdCltFrsComponent,canActivate:[ApplicationGardService],data:{origin:'client'}},
      {path:'nouveauclient',component:NouveauClientFournisseurComponent,canActivate:[ApplicationGardService],data:{origin:'client'}},
      {path:'nouveauclient/:id',component:NouveauClientFournisseurComponent,canActivate:[ApplicationGardService],data:{origin:'client'}},
      {path:'fournisseurs',component:PageFournisseurComponent,canActivate:[ApplicationGardService]},
      {path:'commandesfournisseur',component:PageCmdCltFrsComponent,canActivate:[ApplicationGardService],data:{origin:'fournisseur'}},
      {path:'nouvellecommandefrs',component:NouveauCmdCltFrsComponent,canActivate:[ApplicationGardService],data:{origin:'fournisseur'}},
      {path:'nouveaufournisseur',component:NouveauClientFournisseurComponent,canActivate:[ApplicationGardService],data:{origin:'fournisseur'}},
      {path:'nouveaufournisseur/:id',component:NouveauClientFournisseurComponent,canActivate:[ApplicationGardService],data:{origin:'fournisseur'}},
      {path:'categories',component:PageCategorieComponent,canActivate:[ApplicationGardService]},
      {path:'nouvelleCategorie',component:NouvelCategorieComponent,canActivate:[ApplicationGardService]},
      {path:'nouvelleCategorie/:idCategory',component:NouvelCategorieComponent,canActivate:[ApplicationGardService]},
      {path:'utilisateurs',component:PageUtilisateurComponent,canActivate:[ApplicationGardService]},
      {path:'nouvelutilisateur',component:NouvelUtilisateurComponent,canActivate:[ApplicationGardService]},
      {path:'profil',component:PageProfileComponent,canActivate:[ApplicationGardService]},
      {path:'changermotdepasse',component:ChangePassComponent,canActivate:[ApplicationGardService]},
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
