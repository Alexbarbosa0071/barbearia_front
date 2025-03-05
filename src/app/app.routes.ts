import { Routes } from '@angular/router';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';


export const routes: Routes = [
    {path: 'buscar-clientes', component: BuscarClientesComponent},
    {path: 'cadastrar-cliente', component: CadastrarClienteComponent},
    {path: '', redirectTo: '/buscar-clientes', pathMatch: 'full'},
];
