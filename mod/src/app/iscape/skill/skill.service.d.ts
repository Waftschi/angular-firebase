import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/data.service';
import { Skill } from './skill';
export declare class SkillService {
    private ds;
    constructor(ds: DataService);
    getSkills(): Observable<Skill[]>;
}
