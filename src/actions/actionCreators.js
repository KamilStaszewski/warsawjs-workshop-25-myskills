import { UPDATE_QUESTION_VALUE, CLEAR_QUESTION_VALUE } from "../constans";

export const updateQuestionValue = (id, newValue) => ({
    type: UPDATE_QUESTION_VALUE,
    id,
    newValue
});

export const clearQuestionValue = (id) => ({
    type: CLEAR_QUESTION_VALUE,
    id
});