function renderCurrentQuestion(currentItem) {
    var wrapperDiv = document.createElement('div');
    wrapperDiv.id = currentItem.objectId;
    wrapperDiv.attributes.questionType = currentItem.type;
    wrapperDiv.classList.add('panel');
    wrapperDiv.classList.add('panel-default');
    var firstInnerDiv = document.createElement('div');
    firstInnerDiv.classList.add('panel-heading');
    var spanForQuestion = document.createElement('span');
    spanForQuestion.classList.add('question-on-exam');
    spanForQuestion.innerText = currentItem.question;
    firstInnerDiv.appendChild(spanForQuestion);
    var secondInnerDiv = document.createElement('div');
    if (currentItem.type === "single") {
        for (var i = 0; i < currentItem.options.length; i++) {
            var radioWrapper = document.createElement('div');
            radioWrapper.classList.add('answers-on-exam');
            var radioButton = document.createElement('input');
            radioButton.type = "radio";
            radioButton.id = "r" + i;
            radioButton.name = "currentQuestion";
            radioButton.value = currentItem.options[i];
            var text = document.createElement("label");
            text.setAttribute('for', "r" + i);
            text.innerText = currentItem.options[i];
            radioWrapper.appendChild(radioButton);
            radioWrapper.appendChild(text);
            secondInnerDiv.appendChild(radioWrapper);

        }
    } else if (currentItem.type === "multiple") {
        for (var i = 0; i < currentItem.options.length; i++) {
            var checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('answers-on-exam');
            var checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.id = "c" + i;
            checkBox.name = "currentQuestion";
            checkBox.value = currentItem.options[i];
            var text = document.createElement("label");
            text.setAttribute('for', "c" + i);
            text.innerText = currentItem.options[i];
            checkboxWrapper.appendChild(checkBox);
            checkboxWrapper.appendChild(text);
            secondInnerDiv.appendChild(checkboxWrapper);

        }
    }
    wrapperDiv.appendChild(firstInnerDiv);
    wrapperDiv.appendChild(secondInnerDiv);
    return wrapperDiv;
}