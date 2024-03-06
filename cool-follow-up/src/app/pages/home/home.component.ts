import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[SidebarComponent]
})
export class HomeComponent {
  sidebarHidden: boolean = false;
  constructor(private sidebarComponent: SidebarComponent) {}

  sidebarIsHidden(hidden:boolean) {
    this.sidebarHidden = hidden;
  }
}
