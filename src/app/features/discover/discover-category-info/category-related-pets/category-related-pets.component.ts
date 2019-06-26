import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/_model/category";
import { Pet } from "src/app/_model/Pet";
import { PetService } from "src/app/_services/pet.service";

@Component({
  selector: "app-category-related-pets",
  templateUrl: "./category-related-pets.component.html",
  styleUrls: ["./category-related-pets.component.scss"]
})
export class CategoryRelatedPetsComponent implements OnInit {
  category: Category;
  relatedpets: Pet[];
  config: any;
  constructor(
    private petService: PetService,
    private activatedroute: ActivatedRoute
  ) {}
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(params => {
      let Id = +params.get("categoryId");
      if (Id) {
        this.relatedpets = this.petService.getByCategory(Id);
      }
    });
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.relatedpets.length
    };
  }
}
