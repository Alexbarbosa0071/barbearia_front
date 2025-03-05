import { Component } from '@angular/core';
import { Clientes, Cliente } from '../../models/cliente-model';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-buscar-clientes',
  imports: [MatTableModule, MatCardModule],
  templateUrl: './buscar-clientes.component.html',
  styleUrl: './buscar-clientes.component.css'
})

export class BuscarClientesComponent {

  displayedColumns: string[] = ['id', 'nomeCompleto', 'telefone', 'endereco', 'ativo'];
  dataRes: Cliente[] = [];

    ngOnInit() {
      this.http.get<Clientes>('https://localhost:7138/buscar-clientes').subscribe(clientes => {   
        this.dataRes = []     
        clientes.clientes.forEach((elem) => {
          this.dataRes.push(elem);
        });
        console.log('dataRes: ', this.dataRes);
      });
    }
  
    constructor(private http: HttpClient) {}
}
