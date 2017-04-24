/*************submit paper****************/
function paperSubmit(submitedPaper) {
    var givenAnswers, answerId, count = 0,
        checked, scoreCard = {},
        results = [];
    var username = document.querySelector('.username').value;
    var existingResults = JSON.parse(localStorage.getItem('results'));
    if (username) {
        for (var i = 0; i < submitedPaper.length; i++) {
            givenAnswers = submitedPaper[i].givenAnswer;
            answerId = submitedPaper[i].questionAndAnswerId;
            checkAnsweredOptions = mapSet(givenAnswers, answerId);
            if (checkAnsweredOptions) {
                count++;
            }
        }
        if (existingResults) {
            for (var i = 0; i < existingResults.length; i++) {
                results.push(existingResults[i]);
            }
        }
        scoreCard.studentName = username;
        scoreCard.result = count;
        results.push(scoreCard);
        localStorage.setItem('results', JSON.stringify(results));
        var resultString = count + " out of all your given answers were correct";
        document.querySelector('.result-shower').innerText = resultString;
    } else {
        alert('enter username');
        return false;
    }
}
/******************************* */
function mapSet(givenAns, id) {
    var answerSet = JSON.parse(localStorage.getItem('option'));
    var mappedAnswer;
    for (var i = 0; i < answerSet.length; i++) {
        if (answerSet[i].id === parseInt(id)) {
            if (answerSet[i].correctAnswer.length != givenAns.length) {
                return false;
            } else {
                mappedAnswer = checkTheAnswers(answerSet[i].correctAnswer, givenAns);
                if (mappedAnswer === answerSet[i].correctAnswer.length) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
};
/************************* */
function checkTheAnswers(correctAnswer, givenAns) {
    var correctCount = 0;
    for (var i = 0; i < correctAnswer.length; i++) {
        for (var j = 0; j < givenAns.length; j++) {
            if (correctAnswer[i] == givenAns[j]) {
                correctCount++;
            }
        }
    }
    return correctCount;
};