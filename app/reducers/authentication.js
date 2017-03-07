//@flow
import createReducer from '../helpers/createReducer';
import { loginCompleteState } from '../states/authentication/LoginCompleteState';

export const loginCompleteReducer = createReducer({ }, {
  [loginCompleteState.type](state, action) {
    let newState = {};
    newState["some"] = "some";
    return newState;
  },
});
