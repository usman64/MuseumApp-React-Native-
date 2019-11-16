import { ADD_PUPPET, UPDATE_PUPPET } from '../Actions/types'

const initialState = {
    text: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PUPPET:
            return {...state, text:action.payload.data}
        case UPDATE_PUPPET:
            return {...state, text: action.payload.data}
        default:
            return state;        
    }
}

export default reducer;