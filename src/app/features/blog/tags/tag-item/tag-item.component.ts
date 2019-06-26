import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tag } from "./../../../../_model/Tag";

@Component({
  selector: "app-tag-item",
  templateUrl: "./tag-item.component.html",
  styleUrls: ["./tag-item.component.scss"]
})
export class TagItemComponent implements OnInit {
  @Input() tag: Tag;
  @Output() tagClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
