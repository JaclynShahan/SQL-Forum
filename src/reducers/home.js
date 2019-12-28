const initialState = {
  showAboutModal: false,
  name: '',
  email: '',
  subject: '',
  message: '',
  showContactModal: false
}

export default function reducer (state = initialState, action) {
  let tempState = state
  switch (action.type) {
    case 'ABOUT_MODAL':
      return { ...tempState, showAboutModal: action.payload }
      case 'CONTACT_NAME' :
      return {...tempState, name: action.payload}
      case 'CONTACT_EMAIL' :
      return {...tempState, email: action.payload}
      case 'CONTACT_SUBJECT' :
      return {...tempState, subject: action.payload}
      case 'CONTACT_MESSAGE' :
      return {...tempState, message: action.payload}
      case 'CONTACT_MODAL' :
      return {...tempState, showContactModal: action.payload}
  }
  return tempState
}
