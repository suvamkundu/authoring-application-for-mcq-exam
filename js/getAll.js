  /**************get the total set******************* */
  var getAll = function() {
      set = {};
      questionObj = {};
      choicesObj = {};
      var choices = [];
      var rightAnswer = [];
      var hasEditableID = JSON.parse(localStorage.getItem("currentId"));
      if (hasEditableID === null) {
          var questionString = document.querySelector(".question").value;
          var answerChips = document.querySelector('.choices').childNodes;
          for (var i = 1; i < answerChips.length; i++) {
              choices.push((answerChips[i].firstChild.innerText));
          }
          var correctAnswer = document.querySelector('.right-answer').childNodes;
          for (var i = 0; i < correctAnswer.length; i++) {
              rightAnswer.push((correctAnswer[i].firstChild.innerText));
          }
          //   console.log(rightAnswer);
          var question = new Question();
          var option = new Options();
          var setId = Date.now();
          var type = document.querySelector('input[name="optradio"]:checked').value;
          questionObj.question = questionString;
          questionObj.id = setId;
          questionObj.type = type;
          choicesObj.arrChoices = choices;
          choicesObj.correctAnswer = rightAnswer;
          choicesObj.id = setId;
          option.add(choicesObj, option);
          question.add(questionObj, question);
          //   console.log(document.querySelector('input[name="optradio"]:checked').value);
          //   options.prototype.add(choices);
      } else {
          var toEditQuestion = new Question();
          var toEidtOption = new Options();
          toEditQuestion.edit(hasEditableID, toEditQuestion);
          toEidtOption.edit(hasEditableID, toEidtOption);
          createPreview();
          localStorage.removeItem("currentId");
      }
      document.querySelector(".question").value = '';
      document.querySelector('.choices').innerHTML = '';
      document.querySelector('.right-answer').innerHTML = '';
      //   document.querySelectoAll('.type input[type=radio]:checked').checked = false;
      fetchSelectedQuestion();
  }