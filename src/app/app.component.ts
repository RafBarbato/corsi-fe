import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'corsi-fe';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;

      this.primengConfig.zIndex = {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
    };
  }
}
