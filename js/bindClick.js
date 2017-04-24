/*******bind click to span******* */
function bindClickToAddDelete() {
    var spans = document.querySelectorAll('.edit');
    var deleteSet = document.querySelectorAll('.delete');
    for (var i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', function(event) {
            document.querySelector('.questionAdder').value = '';
            document.querySelector('.choices').innerHTML = '';
            document.querySelector('.right-answer').innerHTML = '';
            fetchEditable(event.target.id);
        });
        deleteSet[i].addEventListener('click', function(event) {
            var questionClass = new Question();
            var optionClass = new Options();
            // console.log((event.target.parentElement).firstChild.innerHTML);
            questionClass.deleteItem(event.target.attributes.customId, questionClass);
            optionClass.deleteItem(event.target.attributes.customId, optionClass);
            createPreview();
        });
    }
};