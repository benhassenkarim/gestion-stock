import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CltfrsService} from "../../service/ctlfrs/cltfrs.service";

@Component({
  selector: 'app-detail-client-fournisseur',
  templateUrl: './detail-client-fournisseur.component.html',
  styleUrls: ['./detail-client-fournisseur.component.css']
})
export class DetailClientFournisseurComponent implements OnInit{
  @Input()
  origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService

  ) { }

  ngOnInit(): void {
  }

  modifierClientFournisseur(): void {
    if (this.origin === 'client') {
      this.router.navigate(['nouveauclient', this.clientFournisseur.id]);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveaufournisseur', this.clientFournisseur.id]);
    }
  }

  confirmerEtSupprimer(): void {
    if (this.origin === 'client') {
      this.cltFrsService.deleteClient(this.clientFournisseur.id)
        .subscribe(res => {
          this.suppressionResult.emit('success');
        }, error => {
          this.suppressionResult.emit(error.error.error);
        });
    } else if (this.origin === 'fournisseur') {
      this.cltFrsService.deleteFournisseur(this.clientFournisseur.id)
        .subscribe(res => {
          this.suppressionResult.emit('success');
        }, error => {
          this.suppressionResult.emit(error.error.error);
        });
    }
  }
}
