import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'corsi-login',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  configLogoPiattaforma : any;
  configNomePiattaforma : any;

  isUtenteLoggato = false;
  

  constructor(private configurazioneService: ConfigurazioneService) {}

  ngOnInit() {

    const sources = [this.configurazioneService.getNomePiattaforma(),
      this.configurazioneService.getLogoPiattaforma()
    ]; 
    
    forkJoin(sources).subscribe( res => {
      this.configNomePiattaforma = res[0];
      this.configLogoPiattaforma  = res[1];
    });
  }



}
