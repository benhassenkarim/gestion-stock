import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit{
  changerMotDePasseDto: any;
  ancienMotDePasse: any;
  ngOnInit(): void {
    this.utili.findAll().subscribe(res=>{});
  }
  constructor(
    private utili:CategoriesService,
    private router:Router
  ) {
  }
  changerMotDePasseUtilisateur() {

  }

  cancel() {
this.router.navigate(['profil'])
  }


}
