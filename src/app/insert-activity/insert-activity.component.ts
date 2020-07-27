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

  saveActivity(activityInput, i) {
    this.listArray[i].listActivity.push(activityInput.value);
    activityInput.value = "";
  }

  deleteActivity(indexActivity, indexList) {
    this.listArray[indexList].listActivity.splice(indexActivity, 1);
  }
  disableInput(value: string): boolean {
    return value === "" ? true : false;
  }
}
