import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurazioneService } from '../configurazione.service';
import { forkJoin } from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    RippleModule,
    ButtonModule,
    CardModule,
    DataViewModule
  ],
  providers:[
    ConfigurazioneService,
    MessageService
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    RippleModule,
    ButtonModule,
    CardModule,
    DataViewModule
  ]
})
export class SharedModule { }
