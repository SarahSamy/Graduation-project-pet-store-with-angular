import { Component, OnInit } from "@angular/core";
import { TagService } from "src/app/_services/Tag.service";
import { Tag } from "src/app/_model/Tag";

@Component({
  selector: "app-tag-listing",
  templateUrl: "./tag-listing.component.html",
  styleUrls: ["./tag-listing.component.scss"]
})
export class TagListingComponent implements OnInit {
  data: Tag[];
  tageService: TagService;
  constructor(tags: TagService) {
    this.tageService = tags;
    if (!this.data) {
      this.data = this.tageService.getAll();
    }
  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.tageService.getAll();
    }
  }
}
