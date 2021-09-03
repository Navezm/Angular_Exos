import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SIGNIN_FORM } from './forms/sign-in.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm: FormGroup = new FormGroup(SIGNIN_FORM);
  panier = new Map<any, number>();
  produits: any[] = [
    {id: 1, img: "https://img.unocero.com/2020/11/baby-yoda-spacex-viaje-1200x600.jpg", nom: "T-Shirt flocker", prix: 42, type: "Vetements"},
    {id: 2, img: "https://th.bing.com/th/id/OIP.rhdReUUerGjIrv4MkPLTPwHaE7?pid=ImgDet&rs=1", nom: "Pull flocker", prix: 42, type: "Vetements"},
    {id: 3, img: "https://cdn2-www.comingsoon.net/assets/uploads/gallery/comic-con-2017-floor-2/comiccon0001.jpg", nom: "Calçon flocker", prix: 42, type: "Vetements"},
    {id: 4, img: "https://img.ohmirevista.com/s3/esomm/1280/insolito/default_2020-10-01_c028febe-8ef4-4f55-b00b-282b7172799e.jpeg", nom: "String flocker", prix: 42, type: "Vetements"},
  ];

  buyAction(produitId: number) {
    const produit = this.produits.find(it => it.id == produitId);
    if (!this.panier.has(produit)) {
      this.panier.set(produit, 0);
    }

    this.panier.set(produit, this.panier.get(produit) as number + 1);
  }

  handleSignIn() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      console.log("FAIRE QQCH");
    } else {
      console.log("RIEN FAIRE");
      console.log(this.loginForm.errors, this.loginForm.get("username")?.errors)
    }
  }
}
