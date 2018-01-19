import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/data.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    private users: Observable<any[]>;

    constructor(private afs: AngularFirestore, private userService: UserService, private dataService: DataService) {
        this.users = this.userService.getUsers();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // console.dir('destroy');
    }

    disable(userId: string, type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('users', userId, data);
    }

}