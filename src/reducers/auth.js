const initialState = {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  }

//https://github.com/stevekinney/hot-takes-redux/blob/master/src/reducers/auth.js

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE'
      };
    case 'SIGN_OUT':
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null,
        isAdmin: false
      };
    case 'SIGN_IN':
      return {
        status: 'SIGNED_IN',
        email: action.email,
        displayName: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid,
        isAdmin: false
      };
    case 'SET_AS_ADMIN':
      return Object.assign({}, state, { isAdmin: true });
    default:
      return state;
  }
}