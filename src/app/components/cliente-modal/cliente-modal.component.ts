import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { AtualizarCliente} from '../../models/cliente-model';

@Component({
  selector: 'app-cliente-modal',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './cliente-modal.component.html',
  styleUrl: './cliente-modal.component.css'
})
export class ClienteModalComponent {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<ClienteModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      nomeCompleto: [data.nomeCompleto, Validators.required],
      telefone: [data.telefone, [Validators.required]],
      endereco: [data.endereco, [Validators.required]]
    });

    this.form.get("nomeCompleto")
  }
  baseUrl = "https://localhost:7138";

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      var param = {
        id: this.data.id,
        ...this.form.value
      }
      this.http.post<AtualizarCliente>(`${this.baseUrl}/atualizar-cliente`, param).subscribe(data => {      
        if(data.atualizado){
          console.log('Foi atualizado: ', data);
          this.dialogRef.close(this.form);
          window.location.reload()
        } else {
          console.log('Foi atualizado: ', data);
        }
      });
    }
  }
}
