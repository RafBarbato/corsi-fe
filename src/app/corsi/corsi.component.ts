import { Component } from '@angular/core';
//import { SharedModule } from '../shared/shared.module';
//import { ConfigurazioneService } from '../configurazione.service';
//import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-corsi',
  standalone: true,
  //imports: [SharedModule],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.scss'
})
export class CorsiComponent {


  corsi: any[] | undefined;
  grandezzaCard = "col-4";

  constructor(
    //private configurazioneService:ConfigurazioneService
    ) {}

  ngOnInit() {
    /*

    const sources = [this.configurazioneService.getCorsi()]; 
    
    forkJoin(sources).subscribe( res => {
      this.corsi = res[0];
    });

    */


  }
  

}
