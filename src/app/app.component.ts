import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComposantComponent } from './login-composant/login-composant.component';
import { HeaderComposantComponent } from './header-composant/header-composant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComposantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-angular';
}
