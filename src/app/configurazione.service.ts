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
  corsi : any[] = [];


  constructor() {

    if(this.mock){
      this.MENUS = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            route: 'menu'
        },
        {
            label: 'Corsi',
            icon: 'pi pi-star',
            route: 'corsi'
        },
        {
            label: 'Videoconferenze',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U'
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: '2'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: '3'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Download',
            icon: 'pi pi-envelope'
        },
        {
            label: 'Export',
            icon: 'pi pi-envelope'
        }
      ];;


      this.menuOrientation = "vertical";
      this.configNomePiattaforma = {nome: "Nome piattaforma"};
      this.configLogoPiattaforma = {pathLogo: "https://www.salvatorepumo.it/wp-content/uploads/2021/07/logo-significato.jpg", height: 50, width: 150};
      this.stringsMap = [{key: "LOGIN_ERROR", value: "Credenziali errate"}
        ,{key: "LOGIN_ERROR_DETAIL", value: "Username o password errati"}
      ];

      this.corsi = [{nomeCorso: "Corso cucina", categoria:"Cucina", sottotitolo: "Cucina", descrizione: "Impara a cucinare come i veri Chefs", info: "Corso cucina per principianti", prezzo: 19.10,
        imagePath: "https://primefaces.org/cdn/primeng/images/card-ng.jpg",
        acquistato: true, avanzamento: 10, labelTastoCorso: ""
      }, 
      {nomeCorso: "Corso pizza", categoria:"Cucina", sottotitolo: "Pizza", descrizione: "Impara ad impastare come un pizzaiolo", info: "Corso izza per professionisti", prezzo: 1499.99,
        imagePath: "https://primefaces.org/cdn/primeng/images/card-ng.jpg", acquistato: false, avanzamento: 0
      }];
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

  getCorsi(): Observable<any[]> {
    if(this.corsi.length > 0){
      return of(this.corsi);
    }
    return of(this.corsi);
  }


}
