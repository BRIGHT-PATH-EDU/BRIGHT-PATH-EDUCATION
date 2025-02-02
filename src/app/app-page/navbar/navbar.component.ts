import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  activeLink = 'home';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbarDropdown = document.getElementById('navbar-dropdown');
    if (this.isMenuOpen) {
      navbarDropdown?.classList.remove('hidden');
    } else {
      navbarDropdown?.classList.add('hidden');
    }
  }
  

  toggleDropdown(event: MouseEvent) {
    this.isDropdownOpen = !this.isDropdownOpen;
    event.stopPropagation(); // Prevents closing the dropdown when clicking inside the menu
  }
  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement; // Type assertion to HTMLElement
    if (!target.closest('#dropdownNavbarLink') && !target.closest('#dropdownNavbar')) {
      this.isDropdownOpen = false;
    }
  }
}
