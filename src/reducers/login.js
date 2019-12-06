const GET_USER = 'GET_USER'

const initialState = {
  username: '',
  password: '',
  authentication: false,
  user: {}
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'SET_USERNAME':
      return { ...tempState, username: action.payload }
    case 'SET_PASSWORD':
      return { ...tempState, password: action.payload }
    case 'USER_AUTH':
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
