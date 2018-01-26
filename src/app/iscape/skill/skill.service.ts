import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';
import { Skill } from './skill';


@Injectable()
export class SkillService {

    constructor(private ds: DataService) {
    }

    getSkills(): Observable<Skill[]> {
        return <Observable<Skill[]>> this.ds.getCollection('skills');
    }

    disable(payload): Observable<Skill[]> {
        // const data = { isEnabled: payload.isEnabled };
        // console.dir(payload)
        this.ds.update('skills', payload.skillId, payload);

        return this.getSkills();
    }

    delete(payload): Promise<boolean> {
        return this.ds.delete('skills', payload.skillId);
    }

    update(payload): Promise<boolean> {
        return this.ds.update('skills', payload.skillId, payload);
    }

    create(payload): Promise<boolean> {
        return this.ds.create('skills', payload);
    }
}

