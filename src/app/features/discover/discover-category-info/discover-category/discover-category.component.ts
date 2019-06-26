import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/_model/category";
import { CategoryService } from "src/app/_services/category.service";

@Component({
  selector: "app-discover-category",
  templateUrl: "./discover-category.component.html",
  styleUrls: ["./discover-category.component.scss"]
})
export class DiscoverCategoryComponent implements OnInit {
  category: Category;
  constructor(
    private categoryService: CategoryService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.paramMap.subscribe(params => {
      let Id = +params.get("categoryId");

      if (Id) {
        this.category = this.categoryService.getById(Id);
      }
    });
  }

  ngOnInit() {}
}
