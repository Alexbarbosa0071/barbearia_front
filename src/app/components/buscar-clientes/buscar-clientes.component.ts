import { Component } from '@angular/core';
import { Clientes, Cliente, DeletarCliente } from '../../models/cliente-model';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ClienteModalComponent } from '../cliente-modal/cliente-modal.component';
import { CreateClienteModalComponent } from '../create-cliente-modal/create-cliente-modal.component';

@Component({
  selector: 'app-buscar-clientes',
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './buscar-clientes.component.html',
  styleUrl: './buscar-clientes.component.css'
})

export class BuscarClientesComponent {

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  displayedColumns: string[] = ['id', 'nomeCompleto', 'telefone', 'endereco', 'ativo', 'opcoes'];
  dataRes: Cliente[] = [];
  baseUrl = "https://localhost:7138";
  deletado: Boolean = false;

    ngOnInit() {
      this.http.get<Clientes>(`${this.baseUrl}/buscar-clientes`).subscribe(clientes => {   
        this.dataRes = []     
        clientes.clientes.forEach((elem) => {
          this.dataRes.push(elem);
        });
        console.log('dataRes: ', this.dataRes);
      });
    }
  
    onButtonClick(id: string) {
      console.log('Button was clicked!', id);

      this.http.delete<DeletarCliente>(`${this.baseUrl}/excluir-cliente/${id}`).subscribe(data => {   
        this.deletado = data.Deletado;
        console.log('Retorno API; ', data)
        window.location.reload()
      }
    )}
    
    openModal(dataCliente: object): void {
      const dialogRef = this.dialog.open(ClienteModalComponent, {
        data: dataCliente
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('The dialog was closed with result:', result);
          // Handle the form data
        } else {
           console.log('The dialog was closed');
        }
      });
    }

    openModalCreate(): void {
      const dialogRef = this.dialog.open(CreateClienteModalComponent, {
        data: {}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('The dialog was closed with result:', result);
          // Handle the form data
        } else {
           console.log('The dialog was closed');
        }
      });
    }
}
