import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("^[A-Z ]+$")]],
      telefone: [''],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      assunto: ['', [Validators.required, Validators.maxLength(50)]],
      mensagem: ['', [Validators.required, Validators.maxLength(500)]]
    }); 
   }

  ngOnInit(): void {
  }

  public enviar(){
    console.log(this.formulario.get('nome')?.value);
    console.log(this.formulario.get('telefone')?.value);
    console.log(this.formulario.get('email')?.value);
    console.log(this.formulario.get('cep')?.value);
    console.log(this.formulario.get('assunto')?.value);
    console.log(this.formulario.get('mensagem')?.value);
  }

}
