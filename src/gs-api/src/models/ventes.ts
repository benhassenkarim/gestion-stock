/* tslint:disable */
import { LigneVente } from './ligne-vente';
export interface Ventes {
  code?: string;
  commentaire?: string;
  dateVente?: number;
  id?: number;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVente>;
}
