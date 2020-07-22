import { Component, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { PageDataService } from "../../services/tabs-data.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-insert",
  templateUrl: "insert.component.html",
  styleUrls: ["insert.component.css"]
})
export class InsertPageComponent {
  @Input("index") index: number;

  // contenitore di input ( serve a prelevare e controllare valori)
  form: FormGroup;
  constructor(
    private pageDataService: PageDataService,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    this.form = this.createForm(formBuilder);
    console.log("DATA MODAL: index =>>>>> ", this.index);
  }

  saveLista() {
    const listValue: any = this.getListValue();
    this.pageDataService.addElement(listValue);
    this.pageDataService.presentToast("Lista Salvata con Successo!");
    this.form.reset();
  }

  getListValue(): any {
    const titleValue = this.form.get("title").value;
    const descriptionValue = this.form.get("description").value;
    const labelValue = this.form.get("label").value;
    const startDateValue = this.form.get("startDate").value;
    const endDateValue = this.form.get("endDate").value;
    const lista: any = {
      title: titleValue,
      description: descriptionValue,
      labels: labelValue,
      startDate: startDateValue,
      endDate: endDateValue
    };
    return lista;
  }

  createForm(formBuilder) {
    return formBuilder.group({
      title: [
        "",
        [Validators.minLength(3), Validators.maxLength(25), Validators.required]
      ],
      description: [
        "",
        [Validators.minLength(3), Validators.maxLength(50), Validators.required]
      ],
      label: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required]
    });
  }
}
