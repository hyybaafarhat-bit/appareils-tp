import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentif',
  imports: [FormsModule],
  templateUrl: './authentif.html',
  styleUrl: './authentif.css'
})
export class Authentif {
  email = '';
  password = '';

  onLogin() {
    alert(`Connexion tentée avec : ${this.email}`);
  }
}