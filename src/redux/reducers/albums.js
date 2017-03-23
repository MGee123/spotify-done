const initialState = {
  albums: []
}

export default function get(state = initialState, action) {
  switch (action.type) {
    case 'get/GET_ALBUMS':
      return { ...state, albums: action.payload }
    default:
      return state
  }
}
