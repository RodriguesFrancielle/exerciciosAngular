import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  nome: string = ""
  input: string = ""

  public botaoSalvar(){
    this.nome = this.input

  }
  public botaoLimpar(){
    this.input = ""
    
   }

  
}



