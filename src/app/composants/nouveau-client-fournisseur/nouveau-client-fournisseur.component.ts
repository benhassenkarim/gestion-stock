import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-client-fournisseur',
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrls: ['./nouveau-client-fournisseur.component.css']
})
export class NouveauClientFournisseurComponent implements OnInit{
  origine='';

  constructor(
    private router:Router,
    private ActivatedRoute:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
this.ActivatedRoute.data.subscribe(data=>{
  this.origine= data['origin'];
  console.log(this.origine)
});
  }

  cancel() {
    if (this.origine==='client'){
     this.router.navigate(['clients'])
    }else if (this.origine==='fournisseur'){
      this.router.navigate(['fournisseurs'])
    }

  }

  enregistrerArticle() {

  }
}
