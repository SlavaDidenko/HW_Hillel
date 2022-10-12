const defaultState = {
  user: JSON.parse(localStorage.getItem('sign')) || false,
}

const signReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return { ...state , user: action.payload}

    default:
      return state;
  }
}

export default signReducer;
