import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';
import { User } from './user';
export declare class UserService {
    private ds;
    constructor(ds: DataService);
    getUsers(): Observable<User[]>;
}
