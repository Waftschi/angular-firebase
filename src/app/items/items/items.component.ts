import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    items: Observable<any[]>;

    constructor(afs: AngularFirestore) {
        this.items = afs.collection('items', ref => ref.where('name', '==', 'Item 1')
            // .where('isActive', '==', true)
        ).valueChanges();
    }

    ngOnInit() {
    }

}
