/* tslint:disable */
import { Article } from './article';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseur {
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
