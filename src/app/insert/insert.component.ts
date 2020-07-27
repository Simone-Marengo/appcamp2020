import { Component, Input, OnInit, OnDestroy } from "@angular/core";
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
export class InsertPageComponent implements OnInit, OnDestroy {
  minStartDate: string;
  listIndexNumber: number;
  action: string = "Save";
  element: any;

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

  // 1. string interpolation

  //     {{ string }}

  // 2. property binding

  //   <tag  [ property ] = " value ">

  // 3. event binding

  //     ( event ) = " method() "

  ngOnInit() {
    const index = this.pageDataService.indexElementToUpdate;

    this.setMinStartDates();

    if (index !== null && index !== undefined) {
      this.element = this.pageDataService.getElementByIndexElementToUpdate();
      if (this.element) {
        this.action = "Edit";
        this.valorizeForm(this.element);
      }
    }
  }

  setMinStartDates() {
    const today: string = new Date().toISOString();
    this.minStartDate = today;
  }

  private valorizeForm(element) {
    const { title, description, label, startDate, endDate, imageUrl } = element;
    this.form.patchValue({
      title,
      description,
      label,
      startDate,
      endDate,
      imageUrl
    });
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
    // ! NOT
    // && AND true AND true = true tutto il resto false
    // || OR false || false = false tutto il resto, se almeno una è true = true

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
      imageUrl: imageUrlValue,
      listActivity: this.action === "Edit" ? this.element.listActivity : []
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

  ngOnDestroy() {
    this.element = null;
  }
}
