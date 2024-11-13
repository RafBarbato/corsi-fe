import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurazioneService {

  mock : boolean = true;

  MENUS : any[] = [];
  menuOrientation : string = "";
  configNomePiattaforma : any;
  configLogoPiattaforma : any;


  constructor() {

    if(this.mock){
      this.MENUS = [{nome: "HOME"}, {nome: "TEST2"}];
      this.menuOrientation = "vertical";
      this.configNomePiattaforma = {nome: "Nome piattaforma"};
      this.configLogoPiattaforma = {pathLogo: "https://www.salvatorepumo.it/wp-content/uploads/2021/07/logo-significato.jpg", height: 50, width: 150};
    }
    
  }


  getLogoPiattaforma(): Observable<any> {
    if(this.configLogoPiattaforma){
      return of(this.configLogoPiattaforma);
    }
    return of(this.configLogoPiattaforma);
  }

  getNomePiattaforma(): Observable<any> {
    if(this.configNomePiattaforma){
      return of(this.configNomePiattaforma);
    }
    return of(this.configNomePiattaforma);
  }

  getMenuOrientation(): Observable<any> {
    if(this.menuOrientation != ""){
      return of(this.menuOrientation);
    }
    return of(this.menuOrientation);
  }

  getMenus(): Observable<any[]> {
    if(this.MENUS.length > 0){
      return of(this.MENUS);
    }
    return of(this.MENUS);
  }
}
