import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barbearia-front';
}
