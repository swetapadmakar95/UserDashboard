import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-form',
  standalone: true, 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [FormsModule,CommonModule] 
})
export class UserFormComponent {
  name: string = '';
  email: string = '';
  role: 'Admin' | 'Editor' | 'Viewer' = 'Viewer';
  constructor(public modalRef: BsModalRef) {}
  onSave?: (user: any) => void; //callback function after adding new user
  submit(userForm: NgForm) {
    if(userForm.invalid) {
      return;
    }
    else{
      this.onSave?.({ name: this.name, email: this.email, role: this.role });
      this.modalRef.hide();
    }
  }

  close() {
    this.modalRef.hide();
  }
}
