import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toastr = inject(ToastrService);

  showMessage(type: 'success' | 'error' | 'info' | 'warning', message: string) {
    switch (type) {
      case 'success':
        this.toastr.success(message, 'Success');
        break;
      case 'error':
        this.toastr.error(message, 'Error');
        break;
      case 'info':
        this.toastr.info(message, 'Info');
        break;
      case 'warning':
        this.toastr.warning(message, 'Warning');
        break;
      default:
        console.warn('Invalid toast type:', type);
    }
  }
}
