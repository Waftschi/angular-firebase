import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';

export interface Skill {
    name: string;
}

@Injectable()
export class SkillService {
    skills: Observable<any[]>;

    constructor(private ds: DataService) {

    }

    getSkills() {
        return this.ds.getCollection('skills');
    }
}
