import { Component, Input } from '@angular/core';
import { HeaderLinkComponent } from '../header-link/header-link.component';
import { PictureComponent } from '../picture/picture.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderLinkComponent, PictureComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

}
