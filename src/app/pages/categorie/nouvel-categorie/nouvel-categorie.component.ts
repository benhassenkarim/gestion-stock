import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.css']
})
export class NouvelCategorieComponent implements OnInit{

  constructor(
    private router:Router,

  ) {
  }
  ngOnInit(): void {

  }
  cancel() {
    this.router.navigate(['categories'])
  }

  enregistrerArticle() {

  }
}
