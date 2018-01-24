import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';
import { Skill } from './skill';


@Injectable()
export class SkillService {

    constructor(private ds: DataService) {}

    getSkills(): Observable<Skill[]> {
        return <Observable<Skill[]>> this.ds.getCollection('skills');
    }
}
