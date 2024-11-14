import {init} from "./init"

export const appReducer = (state=init,action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}