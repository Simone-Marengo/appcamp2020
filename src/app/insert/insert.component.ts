import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { PageDataService } from "../../services/tabs-data.service";

@Component({
  selector: "app-insert",
  templateUrl: "insert.component.html",
  styleUrls: ["insert.component.css"]
})
export class InsertComponent {
  // contenitore di input ( serve a prelevare e controllare valori)
  form: FormGroup;
  constructor(
    private pageDataService: PageDataService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      title: [
        "",
        [Validators.minLength(3), Validators.maxLength(10), Validators.required]
      ],
      description: [
        "",
        [Validators.minLength(3), Validators.maxLength(30), Validators.required]
      ],
      label: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required]
    });
  }

  saveLista() {
    const listValue: any = this.getListValue();
    this.form.reset();
    this.pageDataService.addElement(listValue);
  }

  getListValue(): any {
    const titleValue = this.form.get("title").value;
    const descriptionValue = this.form.get("description").value;
    const labelsValue = this.form.get("labels").value;
    const startDateValue = this.form.get("startDate").value;
    const endDateValue = this.form.get("endDate").value;
    const lista: any = {
      title: titleValue,
      description: descriptionValue,
      labels: labelsValue,
      startDate: startDateValue,
      endDate: endDateValue
    };
    return lista;
  }
}
