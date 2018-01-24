import { AppDocument } from '../shared/document';
import { Skill } from '../skill/skill';

export interface User extends AppDocument {
    id?: string;
    name?: string;
    clientId?: string;
    isEnabled?: boolean;
    skills?: Skill[];
}
