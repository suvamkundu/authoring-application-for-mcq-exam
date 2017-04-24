  var totalOptions;

  function addToOptionSet() {
      var optionValue = document.querySelector('.choiceText').value;
      var typeCheckBox = document.querySelector('.type input[type=radio]:checked');
      if (typeCheckBox === null) {
          alert('select question type!!');
          return false;
      } else {
          if (optionValue === '') {
              return false;
          } else {
              document.querySelector('.choices').appendChild(makeChips(optionValue));
              $(".choices div").draggable({
                  helper: function(e) {
                      var original = $(e.target).hasClass("ui-draggable") ? $(e.target) : $(e.target).closest(".ui-draggable");
                      return original.clone().css({
                          opacity: 0.7,
                          width: original.outerWidth(),
                          height: original.height()
                      });
                  },

              });
              document.querySelector('.choiceText').value = '';
          }
      }
  }
  /*************Question**** *************/
  var Question = function(qtn) {

  };

  Question.prototype.add = function(qtn, instnce) {
      if (instnce instanceof Options) {
          var answersToAdd = [];
          var existingChoices = JSON.parse(localStorage.getItem("option"));
          //   if (existingChoices === null) {
          //       answersToAdd.push(qtn);
          //       localStorage.setItem("option", JSON.stringify(answersToAdd));
          //   } else {
          //       answersToAdd = existingChoices;
          //       answersToAdd.push(qtn);
          //       localStorage.setItem("option", JSON.stringify(answersToAdd));
          //   }
          if (existingChoices !== null) {
              answersToAdd = existingChoices;
          }
          answersToAdd.push(qtn);
          localStorage.setItem("option", JSON.stringify(answersToAdd));
      } else {
          var questionToAdd = [];
          var existingQuestion = JSON.parse(localStorage.getItem("question"));
          if (existingQuestion === null) {
              questionToAdd.push(qtn);
              localStorage.setItem("question", JSON.stringify(questionToAdd));
          } else {
              questionToAdd = existingQuestion;
              questionToAdd.push(qtn);
              localStorage.setItem("question", JSON.stringify(questionToAdd));
          }
      }
      createPreview();

  };
  Question.prototype.edit = function(Id, instnce) {
      set = {};
      questionObject = {};
      choicesObject = {};
      var AllChoices = [];
      var editedRightAnswer = [];
      var allTheQuestions = JSON.parse(localStorage.getItem('question'));
      var allTheChoices = JSON.parse(localStorage.getItem('option'));
      if (instnce instanceof Options) {
          var answerChips = document.querySelector('.choices').childNodes;
          for (var i = 0; i < answerChips.length; i++) {
              AllChoices.push((answerChips[i].firstChild.innerText));
          }
          var correctAnswerChips = document.querySelector('.right-answer').childNodes;
          for (var i = 0; i < correctAnswerChips.length; i++) {
              editedRightAnswer.push((correctAnswerChips[i].firstChild.innerText));
          }
          choicesObject.arrChoices = AllChoices;
          choicesObject.correctAnswer = editedRightAnswer;
          choicesObject.id = parseInt(Id.id);
          for (var eachOptionArray in allTheChoices) {
              if (allTheChoices[eachOptionArray].id === parseInt(Id.id)) {
                  allTheChoices[eachOptionArray] = choicesObject;
                  localStorage.setItem("option", JSON.stringify(allTheChoices));
              }
          }
      } else {
          var fetchedQuestionString = document.querySelector(".question").value;
          for (var i = 0; i < allTheQuestions.length; i++) {
              if (allTheQuestions[i].id == Id.id) {
                  questionObject.id = parseInt(Id.id);
                  questionObject.question = fetchedQuestionString;
                  allTheQuestions[i] = questionObject;
                  localStorage.setItem("question", JSON.stringify(allTheQuestions));
              }
          }
      }
  };
  Question.prototype.deleteItem = function(Id, instnce) {
      var questionBunch = JSON.parse(localStorage.getItem("question"));
      var choicesBunch = JSON.parse(localStorage.getItem("option"));
      if (instnce instanceof Options) {
          for (var deleteableOption in choicesBunch) {
              if (choicesBunch[deleteableOption].id === parseInt(Id)) {
                  choicesBunch.splice(deleteableOption, 1);
                  localStorage.setItem("option", JSON.stringify(choicesBunch));
              }
          }
      } else {
          for (var deleteableQuestion in questionBunch) {
              if (questionBunch[deleteableQuestion].id === parseInt(Id)) {
                  if (questionBunch.length > parseInt(1)) {
                      questionBunch.splice(deleteableQuestion, 1);
                      //   console.log(questionBunch[deleteableQuestion].question);
                      localStorage.setItem("question", JSON.stringify(questionBunch));
                  } else {
                      questionBunch.pop(deleteableQuestion);
                      localStorage.setItem("question", JSON.stringify(questionBunch));
                  }

              }
          }
      }

  };
  /************answer options*********** */
  var Options = function(opt) {

  };
  /****************inheriting all************** */
  Options.prototype = Object.create(Question.prototype);
  /*********************************************** */
  function removeFromCorrectAnswerDiv(textInside) {
      var allSelectedEliment = document.querySelector('.right-answer').childNodes;
      if (allSelectedEliment.length > 0) {
          for (var i = 0; i < allSelectedEliment.length; i++) {
              if (allSelectedEliment[i].firstChild.innerText == textInside) {
                  document.querySelector('.right-answer').removeChild(allSelectedEliment[i]);
                  return;
              }
          }
      }
  };
  document.addEventListener("DOMContentLoaded", function(event) {
      initialize(event);
  });
  window.addEventListener("load", function(event) {

  });