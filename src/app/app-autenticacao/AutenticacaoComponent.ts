import { Component } from "@angular/core";
import { UsuarioService } from "../services/usuarioService";

import { Usuario } from "../interfaces/usuario";
@Component({
    selector: 'app-autenticacao', 
    templateUrl: './AutenticacaoComponent.html', 
    styleUrls: ['./AutenticacaoComponent.css']
})


export class  AutenticacaoComponent{

    usuario: Usuario = {
        userId: '', 
        password: '',
        tipo: ''
    }

    constructor(private usuarioService: UsuarioService ){}

    ngonInit(): void{

    }

    spinner: boolean = false
    msn?: string = ""
    contTentativa: number = 0

    class: string = "";
  

public getUsuario(){

    this.spinner = true;
    this.usuarioService.getUsuario().subscribe((user) => (this.usuario = user[0]))
    console.log(this.usuarioService); 

    setTimeout(() => {
        this.spinner = false;

    if (this.contTentativa <= 3) {
        
        
        if (this.usuario.userId ==  "XPTO-21" && this.usuario.password == "Trocar@123") {
            this.msn = "Logado!"
            this.class = "clGreen"
            
            
        } 
            else if (this.usuario.userId !=  "XPTO-21" && this.usuario.password == "Trocar@123") {
            this.msn = "Acesso negado, usuário incorreto"
            this.class = "clRed"
           
            } 
        
                else if (this.usuario.userId ==  "XPTO-21" && this.usuario.password != "Trocar@123") {
                this.msn = "Acesso negado, senha incorreta"
                this.class = "clRed"
                }

                else if (this.usuario.userId !==  "XPTO-21" && this.usuario.password != "Trocar@123") {
                    this.msn = "Acesso negado, usuário ou senha incorreta"
                    this.class = "clRed"
                    }
                
                    else  if (this.contTentativa >= 2 && this.usuario.userId !=  "XPTO-21" && this.usuario.password != "Trocar@123" ) { 
                        this.msn = "Usuário Bloqueado!" 
                        this.class = "clRed"
                    }
                
                    this.contTentativa++

                
                }
            
            }, 500); 
    }
}
