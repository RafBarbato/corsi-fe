import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';



import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'corsi-login',
  standalone: true,
  imports: [MenuComponent, SharedModule
    ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  username!: FormControl;
  password!: FormControl;
  loginForm!: FormGroup;
  
  configLogoPiattaforma : any;
  configNomePiattaforma : any;

  isUtenteLoggato = false;
  loginErrorMessage = {header:"", detail: ""};
  
  
  

  constructor(private configurazioneService: ConfigurazioneService, 
    private messageService: MessageService, private router: Router
  ) {}

  ngOnInit() {

    const sources = [this.configurazioneService.getNomePiattaforma(),
      this.configurazioneService.getLogoPiattaforma()
      ,this.configurazioneService.getStringValueByKey("LOGIN_ERROR")
      ,this.configurazioneService.getStringValueByKey("LOGIN_ERROR_DETAIL")
    ];

    this.username = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
    
    forkJoin(sources).subscribe( res => {
      this.configNomePiattaforma = res[0];
      this.configLogoPiattaforma  = res[1];
      this.loginErrorMessage.header = res[2];
      this.loginErrorMessage.detail = res[3];
    });


  }

  show(){
    this.messageService.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted"
    });
  }

  login(){
    if(this.loginForm.valid){
      this.isUtenteLoggato = true;
      this.router.navigate(['/corsi']);
    }
    else {
      this.messageService.add({
        severity: "error",
        summary: this.loginErrorMessage.header,
        detail: this.loginErrorMessage.detail
      });
    }
  }

}
