import { OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export declare class ItemsComponent implements OnInit {
    items: Observable<any[]>;
    constructor(afs: AngularFirestore);
    ngOnInit(): void;
}
