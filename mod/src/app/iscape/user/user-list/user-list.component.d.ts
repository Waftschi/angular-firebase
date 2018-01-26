import { OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../../shared/data.service';
import { AngularFirestore } from 'angularfire2/firestore';
export declare class UserListComponent implements OnInit, OnDestroy {
    private afs;
    private userService;
    private dataService;
    private users;
    constructor(afs: AngularFirestore, userService: UserService, dataService: DataService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    disable(userId: string, type: boolean): void;
}
