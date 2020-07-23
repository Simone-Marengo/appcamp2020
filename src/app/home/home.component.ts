import { Component } from "@angular/core";
import { PageDataService } from "../../services/tabs-data.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { InsertPageComponent } from "../insert/insert.component";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  listArray: Array<any> = [];

  constructor(
    private pageDataService: PageDataService,
    private modalController: ModalController
  ) {
    this.refreshArray();
  }

  refreshArray() {
    this.listArray = this.pageDataService.listArray;
  }

  async editList(index: number) {
    this.presentModal(index);
  }

  async presentModal(index: number) {
    this.pageDataService.indexElementToUpdate = index;
    const modal = await this.modalController.create({
      component: InsertPageComponent
      // componentProps: {
      //   listIndexNumber: index
      // }
    });

    modal.onDidDismiss().then((detail: any) => {
      this.pageDataService.resetIndexElementToUpdate();
    });

    return await modal.present();
  }

  /*
    per eliminare un elemento
      - metodo collegato al bottone di delete nell'html
      - nel metodo richimare, passando l'index attuale dell'elemento da eliminare,
        al metodo di eliminazione nel service
      - infine aggiornare l'array con quello modificato nel service
  */
  deleteList(index: number) {
    this.pageDataService.deleteElement(index);
    this.pageDataService.presentToast("Lista Eliminata con Successo!");
    this.refreshArray();
  }

  imageUrlOops =
    "https://previews.123rf.com/images/gorkemdemir/gorkemdemir1409/gorkemdemir140901206/31675881-oops-red-rubber-stamp-over-a-white-background-.jpg";
}
