import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";
import {ChangerMotDePasseUtilisateurDto} from "../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto";

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit{
  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto={};
  ancienMotDePasse: any;
  ngOnInit(): void {
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }
  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
      .subscribe(data => {
        // rien faire
        this.router.navigate(['profil']);
      });
  }

  cancel() {
this.router.navigate(['profil'])
  }


}
