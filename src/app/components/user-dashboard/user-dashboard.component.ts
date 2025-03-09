import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChartComponent } from "./chart/chart.component";
import { UserFilterPipe } from './user-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ChartComponent,
        UserFilterPipe
    ],
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    users$: Observable<any[]>;
    modalRef?: BsModalRef;
    searchValue: any = '';
    userRoles: any = { Admin: 0, Editor: 0, Viewer: 0 };
    constructor(private userService: UserService, private modalService: BsModalService) {
        this.users$ = this.userService.getUsers();
    }
    ngOnInit() {
        this.users$.subscribe(users => {
            console.log('Users:', users);
            this.updateUserRoles(users);
        });
    }
    async openUserForm() {
        if (this.modalRef) {
            return;
        }
        const { UserFormComponent } = await import('../user-form/user-form.component');
        this.modalRef = this.modalService.show(UserFormComponent, {
            class: 'modal-lg',
            initialState: {
                onSave: (user: any) => this.addUser(user)
            }
        });
        this.modalRef?.onHide?.subscribe(() => {
            this.modalRef = undefined;
        });
    }
    // adding new user
    addUser(user: any) {
        this.userService.addUser(user);
        this.modalRef?.hide();
    }
    // update user roles count
    updateUserRoles(users: any[]) {
        const roleCounts: { [role: string]: number } = {};
        users.forEach(user => {
            roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
        });
        this.userRoles = { ...roleCounts };
    }
}
