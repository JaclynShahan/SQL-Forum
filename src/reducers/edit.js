const initialState = {
  id: '',
  subject: '',
  text: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'EDIT_ID':
      return { ...tempState, id: action.payload }
    case 'EDIT_SUBJECT':
      return { ...tempState, subject: action.payload }
    case 'EDIT_TEXT':
      return { ...tempState, text: action.payload }
  }
  return tempState
}
