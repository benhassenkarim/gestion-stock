/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeClient } from './commande-client';
export interface Client {
  adresse?: Adresse;
  commandeClients?: Array<CommandeClient>;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
