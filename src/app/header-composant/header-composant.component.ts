import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-composant',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header-composant.component.html',
  styleUrl: './header-composant.component.css'
})
export class HeaderComposantComponent {

}
