import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = new BehaviorSubject<User[]>([
    { name: 'John Doe', email: 'johndoe@gmail.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'janesmith@gmail.com', role: 'Editor' },
    { name: 'Alice Johnson', email: 'alicej@gmail.com', role: 'Viewer' }
  ]);
  users$: Observable<User[]> = this.users.asObservable();

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  addUser(user: User) {
    const updatedUsers = [...this.users.getValue(), user];
    this.users.next(updatedUsers);
  }
}