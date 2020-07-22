import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class PageDataService {
  public listArray: Array<any> = [];
  public indexElementToUpdate: number;
  constructor(private toastController: ToastController) {}

  public addElement(element: any) {
    this.listArray.push(element);
  }

  public deleteElement(index: number) {
    // il metodo splice elimina un certo numero di elementi partendo dall'index dato
    this.listArray.splice(index, 1);
  }

  public getElementByIndexElementToUpdate(): any {
    return this.listArray[this.indexElementToUpdate];
  }

  public resetIndexElementToUpdate(): any {
    this.indexElementToUpdate = null;
  }

  public async presentToast(title: string) {
    const toast = await this.toastController.create({
      header: title,
      position: "bottom",
      duration: 2000
    });
    toast.present();
  }
}
