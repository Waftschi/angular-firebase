import { OnDestroy, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { DataService } from '../../shared/data.service';
import { AngularFirestore } from 'angularfire2/firestore';
export declare class SkillListComponent implements OnInit, OnDestroy {
    private afs;
    private skillService;
    private dataService;
    private skills$;
    constructor(afs: AngularFirestore, skillService: SkillService, dataService: DataService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    disable(skillId: string, type: boolean): void;
}
