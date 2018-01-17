import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Document {
    id?: string;
    clientId?: string;
    isEnabled?: boolean;
}

@Injectable()
export class DataService {
    private itemDoc: AngularFirestoreDocument<Document>;

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    getCollection(colName: string) {
        return this.afs.collection(colName).snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;

                console.log(data);

                return { id, ...data };
            });
        });
    }

    /**
     *
     * @param {string} colName
     * @param {string} id
     * @returns {Promise<boolean>}
     */
    delete(colName: string, id: string) {
        return this.afs.collection(colName).doc(id).delete().then(
            result => Promise.resolve(true)
        );
    }

    read(col, data: Document): any {
        return this.afs.doc<Document>(col + '/' + data.id).valueChanges();
    }

    update(col, id, data: Document) {
        this.itemDoc = this.afs.doc<Document>(col + '/' + id);
        this.itemDoc.update(data);
    }

    create(colName, data: Document) {
        const client = this.authService.getClient();

        data = <Document>{ clientId: client.clientId, isEnabled: true, ...data };
        console.dir(data);
        const doc = this.afs.collection(colName).add(data);
    }
}
