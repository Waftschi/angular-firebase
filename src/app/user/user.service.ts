import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';
import { User } from './user';


@Injectable()
export class UserService {

    constructor(private ds: DataService) {}

    getUsers(): Observable<User[]> {
        return <Observable<User[]>> this.ds.getCollection('users');
    }
}
