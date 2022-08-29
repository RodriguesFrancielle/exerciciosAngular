import { Component } from "@angular/core";
import { UsuarioService } from "../services/usuarioService";
import { Usuario } from "../interfaces/usuario";
import { Router } from "@angular/router";

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
    usuarioServer: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }

    constructor(private usuarioService: UsuarioService, private router: Router ){}

    ngonInit(): void{

    }

    spinner: boolean = false
    msn?: string = ""
    contTentativa: number = 0

    class: string = "";
  

public login(){

    this.spinner = true;
    this.usuarioService.getUsuario().subscribe((user) => (this.usuarioServer = user[0]))
    console.log(this.usuarioService); 

    setTimeout(() => {
        this.spinner = false;

    if (this.contTentativa <= 3) {
        
        
        if (this.usuario.userId ==  "XPTO-21" && this.usuario.password == "Trocar@123") {
            this.msn = "Logado!"
            this.class = "clGreen"
            localStorage['token'] = "true"                  
            this.router.navigate(['/']);
            
            
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
