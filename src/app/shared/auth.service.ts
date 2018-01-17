import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {
    }

    getClient() {
        return { clientId: 1 };
    }

}
