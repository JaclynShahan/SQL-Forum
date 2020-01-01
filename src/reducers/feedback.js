const initialState = {
  showFeedbackModal: false,
  questionOne: '',
  questionTwo: '',
  questionThree: '',
  feedbackLike: '',
  feedbackDislike: '',
  questionFour: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state
  switch (action.type) {
    case 'FEEDBACK_MODAL':
      return { ...tempState, showFeedbackModal: action.payload }
    case 'QUESTION_ONE':
      return { ...tempState, questionOne: action.payload }
    case 'QUESTION_TWO':
      return { ...tempState, questionTwo: action.payload }
    case 'QUESTION_THREE':
      return { ...tempState, questionThree: action.payload }
    case 'FEEDBACK_LIKE':
      return { ...tempState, feedbackLike: action.payload }
    case 'FEEDBACK_DISLIKE':
      return { ...tempState, feedbackDislike: action.payload }
    case 'QUESTION_FOUR':
      return { ...tempState, questionFour: action.payload }
  }
  return tempState
}
