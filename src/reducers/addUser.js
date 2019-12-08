const GET_USER = 'GET_USER'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    user: {},
    authentication: false
}

export default function reducer (state = initialState, action) {
    let tempState = state
  
    switch (action.type) {
        case 'SET_NEW_FIRSTNAME':
        return {...tempState, firstname: action.payload}
        case 'SET_NEW_LASTNAME':
        return {...tempState, lastname: action.payload}
        case 'SET_NEW_EMAIL':
        return {...tempState, email: action.payload}
      case 'SET_NEW_USERNAME':
        return { ...tempState, username: action.payload }
      case 'SET_NEW_PASSWORD':
        return { ...tempState, password: action.payload }
      case 'NEW_USER_AUTH':
        return { ...tempState, authentication: action.payload }
      case GET_USER + '_PENDING':
        return Object.assign({}, state, { isLoading: true })
      case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {
          user: action.payload,
          isLoading: false
        })
    }
    return tempState
  }