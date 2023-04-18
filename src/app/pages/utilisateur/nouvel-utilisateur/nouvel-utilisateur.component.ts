import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit{


  constructor(
    private router:Router,

  ) {
  }
  ngOnInit(): void {

  }
  cancel() {
    this.router.navigate(['utilisateurs'])
  }

  enregistrerArticle() {

  }


}
