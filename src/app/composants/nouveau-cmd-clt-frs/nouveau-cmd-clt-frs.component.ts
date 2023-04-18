import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-cmd-clt-frs',
  templateUrl: './nouveau-cmd-clt-frs.component.html',
  styleUrls: ['./nouveau-cmd-clt-frs.component.css']
})
export class NouveauCmdCltFrsComponent implements OnInit {
  origin='';
  constructor(
    private router :Router,
    private ActivatedRoute:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data=>{
    this.origin= data['origin'];

    });
  }


  cancel() {
    if (this.origin==='client'){
      this.router.navigate(['commandesclient'])
    }else if (this.origin==='fournisseur'){
      this.router.navigate(['commandesfournisseur'])
    }
  }
}
