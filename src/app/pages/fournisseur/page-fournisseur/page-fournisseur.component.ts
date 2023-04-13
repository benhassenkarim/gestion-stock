import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.css']
})
export class PageFournisseurComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(
    private router:Router
  ) {
  }
  nouvelFournisseur():void {
this.router.navigate(['nouveaufournisseur'])
  }


}
