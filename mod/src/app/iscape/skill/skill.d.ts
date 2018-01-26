import { AppDocument } from '../shared/document';
export interface Skill extends AppDocument {
    id?: string;
    name?: string;
    clientId?: string;
    isEnabled?: boolean;
}
