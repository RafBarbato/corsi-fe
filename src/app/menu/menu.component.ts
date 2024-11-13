import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'corsi-menu',
  standalone: true,
  imports: [NgbModule, NgbNavModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menu: any = [];
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


    

  }

}
