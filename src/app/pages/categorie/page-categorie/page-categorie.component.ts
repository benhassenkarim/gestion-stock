import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryDto} from "../../../../gs-api/src/models/category-dto";
import {CategoriesService} from "../../../../gs-api/src/services/categories.service";
import {GategorieService} from "../../../service/gategorie/gategorie.service";

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent  implements OnInit{

  listCategories: Array<CategoryDto> = [];
  selectedCatIdToDelete ? = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    private categoryService: GategorieService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories(): void {
    this.categoryService.findAll()
      .subscribe(res => {
        this.listCategories = res;
      });
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvelleCategorie']);
  }

  modifierCategory(id?: number): void {
    this.router.navigate(['nouvelleCategorie', id]);
  }

  confirmerEtSupprimerCat(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete)
        .subscribe(res => {
          this.findAllCategories();
        }, error => {
          this.errorMsgs = error.error.message;
        });
    }
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }
}
