 /************edit********** */
 var fetchEditable = function(editableId) {
     var fetchedQtn = JSON.parse(localStorage.getItem("question"));
     var fetchedAns = JSON.parse(localStorage.getItem("option"));
     var currentId = {
         "id": editableId
     };
     localStorage.setItem('currentId', JSON.stringify(currentId));
     for (var editableQtn in fetchedQtn) {
         if (fetchedQtn[editableQtn].id === parseInt(editableId)) {
             document.querySelector('.question').value = fetchedQtn[editableQtn].question;
         }
     }
     for (var editableOptions in fetchedAns) {
         if (fetchedAns[editableOptions].id === parseInt(editableId)) {
             for (var i = 0; i < (fetchedAns[editableOptions].arrChoices).length; i++) {
                 document.querySelector('.choices').appendChild(makeChips((fetchedAns[editableOptions].arrChoices)[i]));
             }
             for (var i = 0; i < (fetchedAns[editableOptions].correctAnswer).length; i++) {
                 var chip = makeChips((fetchedAns[editableOptions].correctAnswer)[i]);
                 chip.style.height = "68%";
                 chip.style.backgroundColor = "#5cb85c";
                 chip.style.Color = "white";
                 chip.firstElementChild.style.color = "white";
                 document.querySelector('.right-answer').appendChild(chip);
             }
         }
     }

 }