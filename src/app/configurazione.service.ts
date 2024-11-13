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
  stringsMap : any[] = [];


  constructor() {

    if(this.mock){
      this.MENUS = [{nome: "HOME"}, {nome: "TEST2"}];
      this.menuOrientation = "vertical";
      this.configNomePiattaforma = {nome: "Nome piattaforma"};
      this.configLogoPiattaforma = {pathLogo: "https://www.salvatorepumo.it/wp-content/uploads/2021/07/logo-significato.jpg", height: 50, width: 150};
      this.stringsMap = [{key: "LOGIN_ERROR", value: "Credenziali errate"}
        ,{key: "LOGIN_ERROR_DETAIL", value: "Username o password errati"}
      ];
    }
    
  }

  getStringValueByKey(key:string): Observable<string> {
    if(this.stringsMap.length > 0){
      return of(this.stringsMap.find(obj => obj.key === key).value);
    }
    return of(this.configLogoPiattaforma);
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
