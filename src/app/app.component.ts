import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panier = new Map<any, number>();
  produits: any[] = [
    {id: 1, img: "https://img.unocero.com/2020/11/baby-yoda-spacex-viaje-1200x600.jpg", nom: "T-Shirt flocker", prix: 42, type: "Vetements"},
    {id: 2, img: "https://th.bing.com/th/id/OIP.rhdReUUerGjIrv4MkPLTPwHaE7?pid=ImgDet&rs=1", nom: "Pull flocker", prix: 42, type: "Vetements"},
    {id: 3, img: "https://cdn2-www.comingsoon.net/assets/uploads/gallery/comic-con-2017-floor-2/comiccon0001.jpg", nom: "Calçon flocker", prix: 42, type: "Vetements"},
    {id: 4, img: "https://img.ohmirevista.com/s3/esomm/1280/insolito/default_2020-10-01_c028febe-8ef4-4f55-b00b-282b7172799e.jpeg", nom: "String flocker", prix: 42, type: "Vetements"},
    {id: 5, img: "https://img.unocero.com/2020/11/baby-yoda-spacex-viaje-1200x600.jpg", nom: "T-Shirt flocker", prix: 42, type: "Vetements"},
    {id: 6, img: "https://th.bing.com/th/id/OIP.rhdReUUerGjIrv4MkPLTPwHaE7?pid=ImgDet&rs=1", nom: "Pull flocker", prix: 42, type: "Vetements"},
    {id: 7, img: "https://cdn2-www.comingsoon.net/assets/uploads/gallery/comic-con-2017-floor-2/comiccon0001.jpg", nom: "Calçon flocker", prix: 42, type: "Vetements"},
    {id: 8, img: "https://img.ohmirevista.com/s3/esomm/1280/insolito/default_2020-10-01_c028febe-8ef4-4f55-b00b-282b7172799e.jpeg", nom: "String flocker", prix: 42, type: "Vetements"},
    {id: 9, img: "https://img.unocero.com/2020/11/baby-yoda-spacex-viaje-1200x600.jpg", nom: "T-Shirt flocker", prix: 42, type: "Vetements"},
    {id: 10, img: "https://th.bing.com/th/id/OIP.rhdReUUerGjIrv4MkPLTPwHaE7?pid=ImgDet&rs=1", nom: "Pull flocker", prix: 42, type: "Vetements"},
    {id: 11, img: "https://cdn2-www.comingsoon.net/assets/uploads/gallery/comic-con-2017-floor-2/comiccon0001.jpg", nom: "Calçon flocker", prix: 42, type: "Vetements"},
    {id: 12, img: "https://img.ohmirevista.com/s3/esomm/1280/insolito/default_2020-10-01_c028febe-8ef4-4f55-b00b-282b7172799e.jpeg", nom: "String flocker", prix: 42, type: "Vetements"},
  ];

  buyAction(produitId: number) {
    const produit = this.produits.find(it => it.id == produitId);
    if (!this.panier.has(produit)) {
      this.panier.set(produit, 0);
    }

    this.panier.set(produit, this.panier.get(produit) as number + 1);
  }
  removeItem(value : any){
    console.log(value[1]);
    if(value[1] == 1){
      console.log("condition")
      this.panier.delete(value[0]);
    } else {
      this.panier.set(value[0], value[1] as number - 1);
    }
  }
}
