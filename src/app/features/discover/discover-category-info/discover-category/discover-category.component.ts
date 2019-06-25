import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-discover-category",
  templateUrl: "./discover-category.component.html",
  styleUrls: ["./discover-category.component.scss"]
})
export class DiscoverCategoryComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  ngOnInit() {}
}
