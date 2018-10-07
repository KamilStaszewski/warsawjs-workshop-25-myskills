const getQuestionById = id => question => question.id === id

export default function updateQuestions(prevState, action) {
    const { id, newValue } = action
    const { questionsData = []} = prevState;
    const foundIndex = questionsData.findIndex(getQuestionById(id))
    
    const prevQuestion = questionsData.slice(0, foundIndex);
    const nextQuestion = questionsData.slice(foundIndex + 1);
    const oldQuestion = questionsData[foundIndex]
    const updatedQuestion = { ...oldQuestion, currentValue: newValue };
    
        
    return [...prevQuestion, updatedQuestion, ...nextQuestion]
}