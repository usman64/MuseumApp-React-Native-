import { ADD_PUPPET, UPDATE_PUPPET} from './types'

const addPuppet = data => {
    return {
        type: ADD_PUPPET,
        payload: data,
    }
}

const updatePuppet = data => {
    return {
        type: UPDATE_PUPPET,
        payload: data,
    }
}

export { addPuppet, updatePuppet }