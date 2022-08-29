import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  constructor(private router: Router){}

  public deslogar(){
    localStorage['token'] = "false"
    this.router.navigate(['/login']);
  }

  public readLocalStorageToken() {
    if (localStorage['token'] === "true") {
      return true
    } else {
      return false
    }
  }
}



