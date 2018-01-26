import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppDocument } from './document';
import { User } from '../user/user';
export declare class DataService {
    private afs;
    private authService;
    private itemDoc;
    constructor(afs: AngularFirestore, authService: AuthService);
    getCollection(colName: string): Observable<AppDocument[]>;
    /**
     *
     * @param {string} colName
     * @param {string} id
     * @returns {Promise<boolean>}
     */
    delete(colName: string, id: string): Promise<boolean>;
    read(col: any, data: AppDocument): Observable<AppDocument | User>;
    update(col: any, id: any, data: AppDocument): void;
    create(colName: any, data: AppDocument): void;
}
