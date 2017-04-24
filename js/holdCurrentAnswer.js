/******************hold current answer*********** */
function holdCurrentAnswer() {
    var checkedQuestion = {};
    var answer = [];
    var currentValues = [];
    var holdingNow = JSON.parse(sessionStorage.getItem('holdedAnswers'));
    if (holdingNow) {
        for (var i = 0; i < holdingNow.length; i++) {
            currentValues.push(holdingNow[i]);
        }
    }
    checkedQuestion.questionAndAnswerId = document.querySelector('.questionViewer div').attributes.id.value;
    checkedQuestion.questionType = document.querySelector('.questionViewer div').attributes.questionType;
    checkedQuestion.checked = true;
    if (document.querySelector('.questionViewer div').attributes.questionType === "single") {
        answer.push(document.querySelector('.questionViewer input[type=radio]:checked').value);
    } else if (document.querySelector('.questionViewer div').attributes.questionType === "multiple") {
        var eachCheckBox = document.querySelectorAll('.questionViewer input[type=checkbox]:checked');
        for (var i = 0; i < eachCheckBox.length; i++) {
            answer.push(eachCheckBox[i].value);
        }
    }
    checkedQuestion.givenAnswer = answer;
    var counter = false;
    if (holdingNow) {
        for (var i = 0; i < holdingNow.length; i++) {
            if (parseInt(holdingNow[i].questionAndAnswerId) === parseInt(checkedQuestion.questionAndAnswerId)) {
                counter = true;
                currentValues[i] = checkedQuestion;
                sessionStorage.setItem('holdedAnswers', JSON.stringify(currentValues));
            }
        }
        if (!counter) {
            currentValues.push(checkedQuestion);
            sessionStorage.setItem('holdedAnswers', JSON.stringify(currentValues));
        }
    } else {
        currentValues.push(checkedQuestion);
        sessionStorage.setItem('holdedAnswers', JSON.stringify(currentValues));
    }
    setIndexOfQuestion(parseInt(+1));
    document.querySelector('.paper-submit').disabled = false;
};