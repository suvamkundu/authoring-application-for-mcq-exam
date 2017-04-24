/***********random number***** */
function generateRandomIndex(max, limit) {
    var num;
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - 0)) + 0;
    return num;
};


function setIndexOfQuestion(step) {
    var selected = JSON.parse(sessionStorage.getItem('selectedSet'));
    indexofArrayIndex += step;
    indexOfQuestion = selected.randomIndexes[indexofArrayIndex];
    var currentQuestionAndAnswer = selected.questionIds[indexOfQuestion];
    if (selected) {
        if (indexofArrayIndex >= 0 || indexofArrayIndex <= selected.randomIndexes.length) {
            renderOneQuestionperClick(currentQuestionAndAnswer);
            document.querySelector('.next').disabled = false;
            document.querySelector('.previous').disabled = false;
        }
        if (indexofArrayIndex === selected.randomIndexes.length - parseInt(1)) {
            document.querySelector('.next').disabled = true;
        } else if (indexofArrayIndex === parseInt(0)) {
            document.querySelector('.previous').disabled = true;
        }

    }
    var currentHoldings = JSON.parse(sessionStorage.getItem('holdedAnswers'));
    if (currentHoldings) {
        for (var i = 0; i < currentHoldings.length; i++) {
            if (parseInt(currentHoldings[i].questionAndAnswerId) === currentQuestionAndAnswer) {
                checkAnsweredOptions(currentHoldings[i].givenAnswer, currentHoldings[i].questionType);
            }
        }
    }
};