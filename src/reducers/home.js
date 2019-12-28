const initialState = {
  showAboutModal: false
}

export default function reducer (state = initialState, action) {
  let tempState = state
  switch (action.type) {
    case 'ABOUT_MODAL':
      return { ...tempState, showAboutModal: action.payload }
  }
  return tempState
}
