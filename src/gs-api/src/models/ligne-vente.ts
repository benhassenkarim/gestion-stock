/* tslint:disable */
import { Article } from './article';
import { Ventes } from './ventes';
export interface LigneVente {
  article?: Article;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: Ventes;
}
