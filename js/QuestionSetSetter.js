function questionSetSetter() {
    var qtnsArray = JSON.parse(localStorage.getItem("question"));
    var ansArray = JSON.parse(localStorage.getItem("option"));
    var hasExistingSet = JSON.parse(localStorage.getItem('repository'));
    var setName = (document.querySelectorAll('.set-name'))[1].value;
    var limitOfQuestion = (document.querySelectorAll('.set-name'))[0].value;
    var questionSetRepository = [];
    var superSet = {};
    var currentSet = [];
    if (setName === '' && limitOfQuestion === '') {
        alert('please give a name to this set');
        return false;
    } else {
        if (hasExistingSet) {
            for (var i = 0; i < hasExistingSet.length; i++) {
                questionSetRepository.push(hasExistingSet[i]);
            }
        }
        var allCheckedCheckBox = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var i = 0; i < allCheckedCheckBox.length; i++) {
            var boxId = allCheckedCheckBox[i].attributes.boxId;
            for (var x = 0; x < qtnsArray.length; x++) {
                if (qtnsArray[x].id === parseInt(boxId)) {
                    currentSet.push(qtnsArray[x].id);
                }
            }
        }
        var id = Date.now();
        superSet.SuperSetid = id;
        superSet.name = setName;
        superSet.limit = limitOfQuestion;
        superSet.questionSuperSet = currentSet;
        questionSetRepository.push(superSet);
        localStorage.setItem('repository', JSON.stringify(questionSetRepository));
        var allcheckBoxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < allcheckBoxes.length; i++) {
            allcheckBoxes[i].checked = false;
        }
        document.querySelector('.setter').disabled = true;
        (document.querySelectorAll('.set-name'))[0].value = '';
        (document.querySelectorAll('.set-name'))[1].value = '';
        (document.querySelectorAll('.set-name'))[0].disabled = true;
        (document.querySelectorAll('.set-name'))[1].disabled = true;
    }
    document.querySelector('.question-names-list').innerHTML = '';
    renderQuestionNames();
};