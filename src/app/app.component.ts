import { Component } from '@angular/core';
import { ToasterService } from './services/toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toaster: ToasterService) {}

  showSuccess() {
    this.toaster.showMessage('success', 'Operation successful!');
  }

  showError() {
    this.toaster.showMessage('error', 'Something went wrong!');
  }

  showInfo() {
    this.toaster.showMessage('info', 'This is an informational message.');
  }

  showWarning() {
    this.toaster.showMessage('warning', 'Be careful!');
  }
}
