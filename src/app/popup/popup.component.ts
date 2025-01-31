import { Component, Output ,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  imports: [ CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  isVisible = false;
  @Output() close = new EventEmitter<void>();

  showPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
    this.close.emit();
  }
}
