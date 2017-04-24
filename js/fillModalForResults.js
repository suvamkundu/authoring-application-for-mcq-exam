/*******result for teacher-view*** */
function getresults(fetchedResults) {
    var modalForResult = document.querySelector('.results-modal-content');
    modalForResult.innerHTML = '';
    for (var i = 0; i < fetchedResults.length; i++) {
        var modalContent = renderModalContent(fetchedResults[i]);
        appendToModal(modalForResult, modalContent);
    }
}
/******render each modal content******** */
function renderModalContent(resultObject) {
    var wrapperParagraph = document.createElement('p');
    var nameSpan = document.createElement("span");
    nameSpan.classList.add('span-for-student-name');
    nameSpan.innerText = resultObject.studentName;
    var score = document.createElement('span');
    score.innerText = "given correct answer : " + resultObject.result;
    wrapperParagraph.appendChild(nameSpan);
    wrapperParagraph.appendChild(score);
    return wrapperParagraph;
};
/************append content to modal */
function appendToModal(parent, element) {
    parent.appendChild(element);
}