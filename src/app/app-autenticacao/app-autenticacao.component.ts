import { Component } from "@angular/core";

@Component({
    selector: 'app-autenticacao', 
    templateUrl: './app-autenticacao.component.html', 
    styleUrls: ['./app-autenticacao.component.css']
})
export class  AppAutenticacaoComponent{
    

    email: string = ""
    password: string = "" 
    msn: string = ""
    contTentativa: number = 0
  

public Login(){

    if (this.contTentativa <= 3) {
        
        if (this.email ==  "XPTO-21" && this.password == "Trocar@123") {
            this.msn = "Logado!"
            
        } 
            else if (this.email !=  "XPTO-21" && this.password == "Trocar@123") {
            this.msn = "Acesso negado, usuário incorreto"
           
            } 
        
                else if (this.email ==  "XPTO-21" && this.password != "Trocar@123") {
                this.msn = "Acesso negado, senha incorreta"
                
                }
                
                    else  if (this.contTentativa >= 2 && this.email !=  "XPTO-21" && this.password != "Trocar@123" ) { 
                        this.msn = "Usuário Bloqueado!" 
                        
                    }
                
                    this.contTentativa++
                }
                
            }
   
}