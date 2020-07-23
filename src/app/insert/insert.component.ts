import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { PageDataService } from "../../services/tabs-data.service";
import { ToastController, ModalController } from "@ionic/angular";
import { aliasTransformFactory } from "@angular/compiler-cli/src/ngtsc/transform/src/alias";

@Component({
  selector: "app-insert",
  templateUrl: "insert.component.html",
  styleUrls: ["insert.component.css"]
})
export class InsertPageComponent implements OnInit {
  listIndexNumber: number;
  action: string = "Save";
  // contenitore di input ( serve a prelevare e controllare valori)
  form: FormGroup;
  constructor(
    private pageDataService: PageDataService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private modalController: ModalController
  ) {
    this.form = this.createForm(formBuilder);
  }

  ngOnInit() {
    const index = this.pageDataService.indexElementToUpdate;
    if (index !== null && index !== undefined) {
      const element = this.pageDataService.getElementByIndexElementToUpdate();
      if (element) {
        this.action = "Edit";
        this.valorizeForm(element);
      }
    }

    // console.log("listIndexNumber =>>>>", this.listIndexNumber);
    // let element;
    // if (this.listIndexNumber) {
    //   element = this.pageDataService.listArray[this.listIndexNumber];
    //   // console.log("element =>>>>", element);
    // }
  }

  private valorizeForm(element) {
    const { title, description, label, startDate, endDate, imageUrl } = element;
    this.form.patchValue({ title, description, label, startDate, endDate, imageUrl });
    // this.form.get("title").setValue(title);
    // this.form.get("description").setValue(description);
    // this.form.get("label").setValue(label);
    // this.form.get("startDate").setValue(startDate);
    // this.form.get("endDate").setValue(endDate);
  }

  saveLista() {
    const listValue: any = this.getListValue();
    this.pageDataService.addElement(listValue);
    this.pageDataService.presentToast("Lista Salvata con Successo!");
    this.form.reset();
  }

  editLista() {
    const listValue: any = this.getListValue();
    this.pageDataService.editElement(listValue);
    this.pageDataService.presentToast("Lista Modificata con Successo!");
    this.form.reset();
    this.dismiss();
  }

  getListValue(): any {
    const titleValue = this.form.get("title").value;
    const descriptionValue = this.form.get("description").value;
    const labelValue = this.form.get("label").value;
    const startDateValue = this.form.get("startDate").value;
    const endDateValue = this.form.get("endDate").value;
    const imageUrlValue = this.form.get("imageUrl").value;
    const lista: any = {
      title: titleValue,
      description: descriptionValue,
      label: labelValue,
      startDate: startDateValue,
      endDate: endDateValue,
      imageUrl: imageUrlValue
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
      endDate: ["", Validators.required],
      imageUrl: ["", Validators.required]
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
