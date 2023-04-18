import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.css']
})
export class PageCmdCltFrsComponent implements OnInit{
  origin='';
  constructor(
    private router:Router,
    private ActivatedRouter:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.ActivatedRouter.data.subscribe(data=>{
     this.origin= data['origin'];
    });
  }
  nouvelCommande() :void{
    if (this.origin==='client'){
      this.router.navigate(['nouvellecommandesclient'])
    }else if (this.origin==='fournisseur'){
      this.router.navigate(['nouvellecommandesfournisseur'])
    }


  }


}
