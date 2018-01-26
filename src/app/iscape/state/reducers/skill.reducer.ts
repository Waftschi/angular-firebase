import * as skillActions from '../actions/skill.actions';
import { Skill } from '../../skill/skill';

export interface SkillState {
    skills: Skill[];
}

export const initialState: SkillState = {
    skills: []
};


export function skillReducer(state = initialState, action: skillActions.Actions): SkillState {
    switch (action.type) {
        case skillActions.LOAD_STORE: {
            return state = {
                ...state
            };
        }

        case skillActions.LOAD: {
            return state = {
                ...state
            };
        }

        case skillActions.DELETE: {
            const skills = state.skills.filter((skill) => skill.id !== action.payload.skillId);
            return state = { ...{ skills: skills } };
        }

        case skillActions.DELETE_SUCCESS: {
            return state = {
                ...state
            };
        }

        case skillActions.DISABLE: {
            console.dir(action.payload);
            const skills = state.skills.map((skill) => skill.id === action.payload.skillId ?
                Object.assign({}, skill, { isEnabled: action.payload.isEnabled }) : skill);

            return state = { ...{ skills: skills } };
        }

        case skillActions.DISABLE_SUCCESS: {
            return state = {
                ...state
            };
        }

        case skillActions.UPDATE: {
            const skills = state.skills.map((skill) => skill.id === action.payload.skillId ?
                Object.assign({}, skill, { name: action.payload.name }) : skill);

            return state = { ...{ skills: skills } };
        }

        case skillActions.UPDATE_SUCCESS: {
            return state = {
                ...state
            };
        }

        case skillActions.LOAD_SUCCESS: {
            return state = {
                skills: action.payload
            };
        }

        case skillActions.LOAD_FAIL: {
            return state = {
                ...state
            };
        }

        case skillActions.CREATE: {
            return { skills: [action.payload, ...state.skills] };
        }

        case skillActions.CREATE_SUCCESS: {
            return state = {
                ...state
            };
        }

        default: {
            return state = {
                ...state
            };
        }
    }
}
