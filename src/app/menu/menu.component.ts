import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'corsi-menu',
  standalone: true,
  imports: [NgbModule, NgbNavModule, CommonModule, SharedModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menu: any = [];
  items: MenuItem[] | undefined;
  orientation = "horizontal";

  constructor(public configurazioneService:ConfigurazioneService) {}

  ngOnInit() {

    // da prendere da BE
    this.menu = [];



    const sources = [this.configurazioneService.getMenuOrientation(), this.configurazioneService.getMenus()]; 
    
    forkJoin(sources).subscribe( res => {
      this.orientation = res[0];
      this.menu = this.menu.concat(res[1]);
    });



    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
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
          label: 'Contact',
          icon: 'pi pi-envelope'
      }
    ];  

  }

}
