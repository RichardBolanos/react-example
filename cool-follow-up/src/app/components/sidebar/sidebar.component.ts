import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem } from '../../Interfaces/menu_item_interface';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('opcionDesplegable') opcionDesplegable!: ElementRef;
  @Output() sidebarIsHidden = new EventEmitter<boolean>();
  @Output() menuIsOpen = new EventEmitter<boolean>();
  isMenuOpen: boolean = false;
  menu: MenuItem[] = [
    {
      type: 'submenu',
      title: 'Proyectos',
      icon: 'fas fa-project-diagram',
      children: [
        {
          type: 'link',
          title: 'Mis Proyectos',
          route: '/projects/my-projects',
          isOpen: false
        },
        {
          type: 'link',
          title: 'Todos los Proyectos',
          route: '/projects/all-projects',
          isOpen: false
        },
        {
          type: 'submenu',
          title: 'Gestión Avanzada',
          isOpen: false,
          children: [
            {
              type: 'link',
              title: 'Crear Nuevo Proyecto',
              route: '/projects/create',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Editar Proyecto',
              route: '/projects/edit',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Eliminar Proyecto',
              route: '/projects/delete',
              isOpen: false
            }
          ]
        }
      ],
      isOpen: false,
      route: ''
    },
    {
      type: 'submenu',
      title: 'Tickets',
      icon: 'fas fa-ticket-alt',
      children: [
        {
          type: 'link',
          title: 'Mis Tickets',
          route: '/tickets/my-tickets',
          isOpen: false
        },
        {
          type: 'link',
          title: 'Todos los Tickets',
          route: '/tickets/all-tickets',
          isOpen: false
        },
        {
          type: 'submenu',
          title: 'Gestión Avanzada',
          isOpen: false,
          children: [
            {
              type: 'link',
              title: 'Crear Nuevo Ticket',
              route: '/tickets/create',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Editar Ticket',
              route: '/tickets/edit',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Eliminar Ticket',
              route: '/tickets/delete',
              isOpen: false
            }
          ]
        }
      ],
      isOpen: false,
      route: ''
    },
    {
      type: 'submenu',
      title: 'Gestión de Usuarios',
      icon: 'fas fa-users',
      children: [
        {
          type: 'link',
          title: 'Ver Todos los Usuarios',
          route: '/users/all-users',
          isOpen: false
        },
        {
          type: 'link',
          title: 'Roles y Permisos',
          route: '/users/roles-permissions',
          isOpen: false
        },
        {
          type: 'submenu',
          title: 'Configuración Avanzada',
          isOpen: false,
          children: [
            {
              type: 'link',
              title: 'Crear Usuario',
              route: '/users/create',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Editar Usuario',
              route: '/users/edit',
              isOpen: false
            },
            {
              type: 'link',
              title: 'Eliminar Usuario',
              route: '/users/delete',
              isOpen: false
            }
          ]
        }
      ],
      isOpen: false,
      route: ''
    },
    {
      type: 'divider',
    },
    {
      type: 'title',
      title: 'Dashboards',
      
    },
    {
      type: 'link',
      title: 'Rendimiento',
      route: '/dashboard',
      icon: 'fas fa-tachometer-alt',
      isOpen: false
    },
    {
      type: 'link',
      title: 'Reportes',
      route: '/reports',
      icon: 'fas fa-chart-bar',
      isOpen: false
    }
  ];
  
  
  

  ngAfterViewInit(): void {}
  sidebarHidden: boolean = false;

  toggleSidebar(): void {
    this.sidebarHidden = !this.sidebarHidden;
    this.sidebarIsHidden.emit(this.sidebarHidden);
  }

  toggleUserMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIsOpen.emit(this.isMenuOpen);
  }
  toggleSubMenu(index: number): void {
    this.menu[index].isOpen = !this.menu[index].isOpen;
  }

  openSubSubMenu(parentIndex: number, childIndex: number): void {
    const parentItem = this.menu[parentIndex];
    if (parentItem && parentItem.children) {
      const childItem = parentItem.children[childIndex];
      if (childItem) {
        childItem.isOpen = !childItem.isOpen;
      }
    }
  }
  openSidebarSubmenu(index: number): void {
    this.menu[index].isOpen = !this.menu[index].isOpen;
  }
}
