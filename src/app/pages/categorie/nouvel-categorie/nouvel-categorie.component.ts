import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryDto} from "../../../../gs-api/src/models/category-dto";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {GategorieService} from "../../../service/gategorie/gategorie.service";

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.css']
})
export class NouvelCategorieComponent implements OnInit{
  categoryDto: CategoryDto = {};
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: GategorieService
  ) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if (idCategory) {
      this.categoryService.findById(idCategory)
        .subscribe(cat => {
          this.categoryDto = cat;
        });
    }
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

  enregistrerCategorie(): void {
    this.categoryService.enregistrerCategory(this.categoryDto)
      .subscribe(res => {
        this.router.navigate(['categories']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }
}
