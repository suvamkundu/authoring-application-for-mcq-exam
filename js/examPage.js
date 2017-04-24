var indexOfQuestion = 0;
var indexofArrayIndex = 0;
var indexArr = [];
window.onresize = function(event) {
    setHeight();
};
var setHeight = function() {
    document.querySelector(".pageBody").style.height = window.innerHeight;
};

function renderOneQuestionperClick(idToFetch) {
    var allQuestions = JSON.parse(localStorage.getItem('question'));
    var selected = JSON.parse(sessionStorage.getItem('selectedSet'));
    var allanswers = JSON.parse(localStorage.getItem('option'));
    var currentObj = {};
    for (var i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].id === idToFetch) {
            currentObj.question = allQuestions[i].question;
            currentObj.type = allQuestions[i].type;
            currentObj.options = getChoices(allanswers, idToFetch);
            currentObj.objectId = idToFetch;
            var panel = renderCurrentQuestion(currentObj);
            document.querySelector('.questionViewer').innerHTML = '';
            document.querySelector('.questionViewer').appendChild(panel);
        }
    }
};
/********************************* */
function getChoices(choices, selectedSet) {
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].id === selectedSet) {
            return choices[i].arrChoices;
        }
    }
};