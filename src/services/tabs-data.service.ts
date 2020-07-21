import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class PageDataService {
  public listArray: Array<any> = [];

  constructor(private toastController: ToastController) {}

  public addElement(element: any) {
    this.listArray.push(element);
  }

  public deleteElement(index: number) {
    // il metodo splice elimina un certo numero di elementi partendo dall'index dato
    this.listArray.splice(index, 1);
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
