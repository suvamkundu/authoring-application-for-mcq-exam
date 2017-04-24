      /*********make chips******* */
      function makeChips(text) {
          var chipDiv = document.createElement('div');
          chipDiv.classList.add('chip');
          chipDiv.classList.add('ui-widget-content');
          var answerText = document.createElement('span');
          answerText.innerHTML = text;
          var close = document.createElement('span');
          close.classList.add('closebtn');
          close.innerHTML = '&times';
          chipDiv.appendChild(answerText);
          chipDiv.appendChild(close);
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
          close.addEventListener('click', function(event) {
              var parent = document.querySelector('.choices');
              var child = event.target.parentElement;
              var discardedElement = (event.target.parentElement).firstChild.innerText;
              if (event.target.parentElement.parentNode.classList.contains("right-answer")) {
                  var addedAnswers = document.querySelector('.choices').childNodes;
                  for (var i = 0; i < addedAnswers.length; i++) {
                      if (addedAnswers[i].firstChild.innerText == discardedElement) {
                          document.querySelector('.choices').removeChild(addedAnswers[i]);
                      }
                  }
              } else {
                  parent.removeChild(child);
              }
              removeFromCorrectAnswerDiv(discardedElement);
          });
          return chipDiv;
      }