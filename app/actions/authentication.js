
import  { loginCompleteState }  from '../states/authentication/LoginCompleteState';
import  { loginInProgressState }  from '../states/authentication/LoginInProgressState';

export function loginComplete() : typeof loginCompleteState {
  let newState = loginCompleteState;
  return newState;
}

export function loginInProgress() : typeof loginInProgressState{
  let newState = loginInProgressState
  return newState;
}

export function loginAction(){
  return (dispatch, getState) => {
    dispatch(loginInProgress())
    dispatch(loginComplete())
  }
}
