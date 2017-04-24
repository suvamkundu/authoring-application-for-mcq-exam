function renderQuestionNames() {
    var parentLevel = document.querySelector('.question-names-list');
    var masterSet = JSON.parse(localStorage.getItem('repository'));
    if (masterSet) {
        for (var i = 0; i < masterSet.length; i++) {
            var questionName = masterSet[i].name;
            var questinSetId = masterSet[i].SuperSetid;
            parentLevel.appendChild(makeQuestionNames(questionName, questinSetId));
        }
        bindClickToNames();
    }
};

function makeQuestionNames(text, id) {
    var questionNameElement = document.createElement('div');
    questionNameElement.innerText = text;
    questionNameElement.classList.add('question-name');
    questionNameElement.attributes.superSetid = id;
    return questionNameElement;
};
/********bind click on name and fetch****** */
function bindClickToNames() {
    var questionView = document.querySelector('.content-shower');
    var questionnames = document.querySelector('.user-name-and-questionName');
    var allNamesList = document.querySelectorAll('.question-names-list div');
    for (var i = 0; i < allNamesList.length; i++) {
        allNamesList[i].addEventListener('click', function(event) {
            document.querySelector('.questionViewer').innerHTML = "";
            getSelectedSet(event.target.attributes.superSetid);
            // getQuestionsForThumbNail(event.target.attributes.superSetid);
            questionView.style.display = "block";
            questionnames.style.display = "none";
        }, false);
    }
};
/***************get selected set************* */
function getSelectedSet(setId) {
    var currentQuestionsSet = [];
    var questions = {};
    var repository = JSON.parse(localStorage.getItem('repository'));
    if (repository) {
        for (var i = 0; i < repository.length; i++) {
            if (repository[i].SuperSetid === setId) {
                questions.questionIds = repository[i].questionSuperSet;
                var questionLimit = repository[i].limit;
                while (indexArr.length < questionLimit) {
                    var randomIndex = generateRandomIndex(questions.questionIds.length, parseInt(questionLimit));
                    if (indexArr.indexOf(randomIndex) < 0) {
                        indexArr.push(randomIndex);
                    }
                }
                questions.randomIndexes = indexArr;
                sessionStorage.setItem('selectedSet', JSON.stringify(questions));
                setIndexOfQuestion(parseInt(0));
            }
        }
    }
};