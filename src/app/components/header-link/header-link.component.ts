import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-link',
  standalone: true,
  imports: [],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.css'
})

export class HeaderLinkComponent {
  @Input() placeholder!: string;
}
