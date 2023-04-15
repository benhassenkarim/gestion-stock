import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit{
  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
  }
  modifierMotDePasse() :void{
this.router.navigate(['changermotdepasse'])
  }


}
