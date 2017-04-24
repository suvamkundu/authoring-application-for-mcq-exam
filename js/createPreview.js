  /*************create preview pane************ */
  function createPreview() {
      var allQuestions = JSON.parse(localStorage.getItem("question"));
      var allChoices = JSON.parse(localStorage.getItem("option"));
      var inputType;
      if (allQuestions != null && allChoices != null) {
          var innerEliments = document.querySelector('.totalSetOfQuestionAnswer').innerHTML = "";
          for (var element in allQuestions) {
              var wrapperDiv = document.createElement('div');
              wrapperDiv.classList.add('panel');
              wrapperDiv.classList.add('panel-default');
              var firstInnerDiv = document.createElement('div');
              firstInnerDiv.classList.add('panel-heading');
              var questionContainer = document.createElement('div');
              questionContainer.classList.add('container-for-question');
              var spanForQuestion = document.createElement('span');
              spanForQuestion.innerText = allQuestions[element].question;
              questionContainer.appendChild(spanForQuestion);
              var del = document.createElement('span');
              del.attributes.customId = allQuestions[element].id;
              del.classList.add('actions');
              del.classList.add('glyphicon');
              del.classList.add('glyphicon-trash');
              del.classList.add('delete');
              //   del.id = allQuestions[element].id;
              var edit = document.createElement('span');
              edit.classList.add('actions');
              edit.classList.add('glyphicon');
              edit.classList.add('glyphicon-pencil');
              edit.classList.add('edit');
              edit.id = allQuestions[element].id;
              var divForCheckBox = document.createElement('div');
              divForCheckBox.classList.add('checkbox-style');
              var chkbox = document.createElement("input");
              chkbox.type = "checkbox";
              chkbox.name = "selected";
              chkbox.value = "pickedQuestion";
              chkbox.attributes.boxId = allQuestions[element].id;
              divForCheckBox.appendChild(chkbox);
              firstInnerDiv.appendChild(divForCheckBox);
              firstInnerDiv.appendChild(questionContainer);
              var deleteEditContainer = document.createElement('div');
              deleteEditContainer.classList.add('container-for-add-delete')
              deleteEditContainer.appendChild(del);
              deleteEditContainer.appendChild(edit);
              firstInnerDiv.appendChild(deleteEditContainer);
              //   firstInnerDiv.appendChild(edit);
              var secondInnerDiv = document.createElement('div');
              secondInnerDiv.classList.add('panel-body');
              for (var eachOptions in allChoices[element].arrChoices) {
                  //   var radio = document.createElement("input");
                  //   radio.type = "radio";
                  //   radio.name = "r" /*+ (allChoices[element].arrChoices)[eachOptions]*/ ;
                  //   radio.value = (allChoices[element].arrChoices)[eachOptions];
                  //   var radioSpan = document.createElement('span');
                  //   radioSpan.innerText = (allChoices[element].arrChoices)[eachOptions];
                  //   secondInnerDiv.appendChild(radio);
                  //   secondInnerDiv.appendChild(radioSpan);
                  if (allQuestions[element].type === "single") {
                      inputType = createTypeBasedOptions("radio", secondInnerDiv, (allChoices[element].arrChoices)[eachOptions]);
                  } else {
                      inputType = createTypeBasedOptions("checkbox", secondInnerDiv, (allChoices[element].arrChoices)[eachOptions]);
                  }
              }
              wrapperDiv.appendChild(firstInnerDiv);
              wrapperDiv.appendChild(inputType);
              document.querySelector('.totalSetOfQuestionAnswer').appendChild(wrapperDiv);
          }
          bindClickToAddDelete();
      } else {
          document.querySelector('.totalSetOfQuestionAnswer').innerHTML = '';
      }


  }

  function createTypeBasedOptions(type, appendTo, text) {
      var inputForAnswer = document.createElement("input");
      inputForAnswer.type = type;
      inputForAnswer.name = "r" /*+ (allChoices[element].arrChoices)[eachOptions]*/ ;
      inputForAnswer.value = text;
      var SpanWithAnswerTExt = document.createElement('span');
      SpanWithAnswerTExt.innerText = text;
      appendTo.appendChild(inputForAnswer);
      appendTo.appendChild(SpanWithAnswerTExt);
      return appendTo;

  };