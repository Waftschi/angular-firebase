import { AppDocument } from '../shared/document';

export interface User extends AppDocument {
    id?: string;
    name?: string;
    clientId?: string;
    isEnabled?: boolean;
}
