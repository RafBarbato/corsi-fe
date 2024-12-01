import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';


@Component({
  selector: 'corsi-menu',
  standalone: true,
  imports: [NgbModule, NgbNavModule, CommonModule, SharedModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  route = "login";
  menu: any = [];
  items: MenuItem[] | undefined;
  orientation = "horizontal";

  constructor(public configurazioneService:ConfigurazioneService, private router:Router) {}

  ngOnInit() {

    // da prendere da BE
    this.menu = [];

    const sources = [this.configurazioneService.getMenuOrientation(), this.configurazioneService.getMenus()]; 
    
    forkJoin(sources).subscribe( res => {
      this.orientation = res[0];
      this.menu = this.menu.concat(res[1]);
      this.completaMenu(this.menu);
    });

  }

  completaMenu(menu:any[]){
    menu.forEach(m => {
      m.command = () => {
        this.router.navigate([m.route], { });
      }
    });
  }

}
