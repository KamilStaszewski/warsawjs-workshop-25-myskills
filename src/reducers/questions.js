import {
    createStore
} from 'redux'
import { UPDATE_QUESTION_VALUE } from '../constans';
import updateQuestions from '../utils/updateQuestions';

function todos(state = [], action) {
    switch (action.type) {
        case UPDATE_QUESTION_VALUE:
            return updateQuestions(state, action)
        default:
            return state
    }
}

export default createStore(todos, [])

