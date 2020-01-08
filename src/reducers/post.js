const initialState = {
    searchPosts: [],
   selectedPost: {},
   newPost: [],
   editModal: false,
   commentText: "",
   postText: "",
   postSubject: "",
   postId: ''
}

export default function reducer (state = initialState, action) {
    let tempState = state
    switch (action.type) {
        case 'SET_POST':
      return { ...tempState, user: action.payload }
    case 'ADD_POST':
      return { ...tempState, newPost: action.payload }

    case 'ADD_COMMENT':
      return { ...state, newComment: action.payload }
    case 'SELECT_POST':
      return { ...tempState, selectedPost: action.payload }
    case 'SEARCH_POSTS':
      return { ...tempState, searchPosts: action.payload }
    case 'EDIT_MODAL' :
    return {...tempState, editModal: action.payload}
    case 'COMMENT_TEXT' :
    return {...tempState, commentText: action.payload}
    case 'POST_TEXT' :
    return {...tempState, postText: action.payload}
    case 'POST_SUBJECT' :
    return {...tempState, postSubject: action.payload}
    }
    
    return tempState
}