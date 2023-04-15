import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailArticleMvtstkComponent } from './composants/detail-article-mvtstk/detail-article-mvtstk.component';
import { DetailMvtstkComponent } from './composants/detail-mvtstk/detail-mvtstk.component';
import { DetailClientFournisseurComponent } from './composants/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouveauCmdCltFrsComponent } from './composants/nouveau-cmd-clt-frs/nouveau-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelCategorieComponent } from './pages/categorie/nouvel-categorie/nouvel-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfileComponent } from './pages/profil/page-profile/page-profile.component';
import { ChangePassComponent } from './pages/profil/change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashbordComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailArticleMvtstkComponent,
    DetailMvtstkComponent,
    DetailClientFournisseurComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauClientFournisseurComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouveauCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfileComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
