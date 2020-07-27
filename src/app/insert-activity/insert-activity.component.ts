import { Component, OnInit } from "@angular/core";
import { PageDataService } from "../../services/tabs-data.service";

@Component({
  selector: "app-insert-activity",
  templateUrl: "insert-activity.component.html",
  styleUrls: ["insert-activity.component.css"]
})
export class InsertActivityComponent implements OnInit {
  listArray: Array<any> = [];
  constructor(private pageDataService: PageDataService) {}

  ngOnInit() {
    this.listArray = this.pageDataService.listArray;
  }
  
}
