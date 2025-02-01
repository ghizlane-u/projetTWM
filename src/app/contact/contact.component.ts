import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, PopupComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Correction ici : styleUrls au pluriel
})
export class ContactComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;  // Accéder à l'instance de PopupComponent

  constructor() {}

  showSuccessPopup() {
    if (this.popup) {
      this.popup.showPopup();  // Appeler showPopup() directement sur l'instance de PopupComponent
    }
  }

  onPopupClose() {
    console.log('Popup fermée');
  }
}
