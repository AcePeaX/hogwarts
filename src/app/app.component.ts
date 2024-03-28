import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IdentityBlockComponent } from './identity-block/identity-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IdentityBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hogwarts';
}
