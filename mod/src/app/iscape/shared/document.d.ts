import { Skill } from '../skill/skill';
export interface AppDocument {
    id?: string;
    clientId?: string;
    isEnabled?: boolean;
    skills?: Skill[];
}
