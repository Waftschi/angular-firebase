import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/data.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit, OnDestroy {
    private skills: Observable<any[]>;

    constructor(private afs: AngularFirestore, private skillService: SkillService, private dataService: DataService) {
        this.skills = this.skillService.getSkills();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // console.dir('destroy');
    }

    disable(skillId: string, type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('skills', skillId, data);
    }

}
