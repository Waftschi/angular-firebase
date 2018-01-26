import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppDocument } from './document';
import { User } from '../user/user';


@Injectable()
export class DataService {
    private itemDoc: AngularFirestoreDocument<AppDocument>;

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    getCollection(colName: string): Observable<AppDocument[]> {
        return this.afs.collection(colName).snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;

                // console.log(data);
                return { id, ...data };
            });
        });
    }

    /**
     * @param {string} colName
     * @param {string} id
     * @returns {Promise<boolean>}
     */
    delete(colName: string, id: string): Promise<boolean> {
        return this.afs.collection(colName).doc(id).delete().then(
            result => Promise.resolve(true)
        );
    }

    read(col, data: AppDocument): Observable<AppDocument | User> {
        return this.afs.doc<AppDocument>(col + '/' + data.id).valueChanges();
    }

    update(col, id, data: AppDocument): Promise<boolean> {
        this.itemDoc = this.afs.doc<AppDocument>(col + '/' + id);

        return this.itemDoc.update(data).then(
            result => Promise.resolve(true)
        );
    }

    create(colName, data: AppDocument): Promise<boolean> {
        const client = this.authService.getClient();
        data = <AppDocument>{ clientId: client.clientId, isEnabled: true, ...data };

        return this.afs.collection(colName).add(data).then(_ => Promise.resolve(true));
    }
}
