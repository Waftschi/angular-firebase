import { Action } from '@ngrx/store';
import { Skill } from '../../skill/skill';

export const CREATE = '[Skill] Create Action';
export const CREATE_SUCCESS = '[Skill] Create Action Success';
export const DELETE = '[Skill] DELETE Action';
export const DELETE_SUCCESS = '[Skill] DELETE Action Success';
export const DISABLE = '[Skill] Disable Action';
export const DISABLE_SUCCESS = '[Skill] Disable Action Success';
export const LOAD = '[Skill] Load';
export const LOAD_FAIL = '[Skill] Load Fail';
export const LOAD_STORE = '[Skill] Load Store';
export const LOAD_SUCCESS = '[Skill] Load Success';
export const UPDATE = '[Skill] Update Action';
export const UPDATE_SUCCESS = '[Skill] Update Action Success';


export interface SkillPayload extends Skill {
    skillId?: string;
}

/**
 * Load Skill Actions
 */
export class LoadStoreAction implements Action {
    readonly type = LOAD_STORE;
}

/**
 * Load Skill Actions
 */
export class LoadAction implements Action {
    readonly type = LOAD;

    // constructor(public payload: any) {
    // }
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: SkillPayload[]) {
        console.dir(payload);
    }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;
}

export class DisableAction implements Action {
    readonly type = DISABLE;

    constructor(public payload: SkillPayload) {
    }
}

export class DeleteAction implements Action {
    readonly type = DELETE;

    constructor(public payload: SkillPayload) {
    }
}

export class DeleteActionSuccess implements Action {
    readonly type = DELETE_SUCCESS;
}

export class DisableActionSuccess implements Action {
    readonly type = DISABLE_SUCCESS;

    constructor(public payload: SkillPayload[]) {
    }
}

export class UpdateAction implements Action {
    readonly type = UPDATE;

    constructor(public payload: any) {
    }
}

export class UpdateActionSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
}

export class CreateAction implements Action {
    readonly type = CREATE;

    constructor(public payload: SkillPayload) {
    }
}

export class CreateActionSuccess implements Action {
    readonly type = CREATE_SUCCESS;
}

export type Actions =
    | CreateAction
    | CreateActionSuccess
    | LoadAction
    | LoadStoreAction
    | LoadSuccessAction
    | LoadFailAction
    | DeleteAction
    | DeleteActionSuccess
    | DeleteAction
    | DeleteActionSuccess
    | UpdateAction
    | UpdateActionSuccess
    | DisableAction
    | DisableActionSuccess;