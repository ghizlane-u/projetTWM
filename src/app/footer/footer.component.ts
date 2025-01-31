import { Component, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  scrollToMenu() {
    const menuElement = document.getElementById('menuSection');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
