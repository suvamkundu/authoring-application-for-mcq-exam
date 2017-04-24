function initialize(event) {
    /************toggle different view****** */
    var teacherView = document.querySelector('.content');
    var questionName = document.querySelector('.questions-shower');
    var questionShower = document.querySelector('.content-shower');
    teacherView.style.display = 'block';
    questionName.style.display = 'none';
    questionShower.style.display = 'none';
    document.querySelector('.add-new-choice').addEventListener('click', addToOptionSet, false);
    document.querySelector('#navigate').addEventListener('click', function() {
        if (teacherView.style.display === 'none') {
            teacherView.style.display = 'block';
        } else if (teacherView.style.display === 'block') {
            teacherView.style.display = 'none';
        }
        if (questionName.style.display === 'none') {
            questionName.style.display = 'block';
        } else if (questionName.style.display === 'block') {
            questionName.style.display = 'none';
        }
    }, false);
    /*************handling drop******* */
    $(".right-answer").droppable({
        accept: ".chip",
        drop: function(event, ui) {
            var typeOfAnswer = $('input[name="optradio"]:checked').val();
            if (typeOfAnswer == "single") {
                var innerContent = $('.right-answer').html();
                if (innerContent) {
                    $('.right-answer').empty();
                }
            }
            var itemToClone = $(ui.draggable);
            $(this).append(itemToClone.clone().css({
                "width": "auto",
                "height": "68%",
                "background-color": "#5cb85c",
                "color": "white"
            }));
            $(this).find('.closebtn').off().on('click', function(event) {
                (event.target.parentElement).remove();
            });
        },
    });
    /*************************************** */
    document.querySelector('.paper-submit').disabled = true;
    document.querySelector('.save-answers button').addEventListener('click', getAll, false);
    createPreview();
    fetchSelectedQuestion();
    var radioButtons = document.querySelectorAll('.totalSetOfQuestionAnswer input[type="radio"]');
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].disabled = true;
    }
    bindClickToAddDelete();
    localStorage.removeItem("currentId");
    sessionStorage.removeItem('selectedSet');
    document.querySelector('.next').addEventListener('click', function() {
        setIndexOfQuestion(parseInt(+1));
    }, false);
    document.querySelector('.previous').addEventListener('click', function() {
        setIndexOfQuestion(parseInt(-1));
    }, false);
    document.querySelector('.holdsAnswer').addEventListener('click', function() {
        holdCurrentAnswer();
    }, false);
    document.querySelector('.paper-submit').addEventListener('click', function() {
        var paper = JSON.parse(sessionStorage.getItem('holdedAnswers'));
        paperSubmit(paper);
    }, false);
    document.querySelector('.see-results').addEventListener('click', function() {
        var latestResults = JSON.parse(localStorage.getItem('results'));
        getresults(latestResults);
    }, false);
    document.querySelector('.setter').addEventListener('click', questionSetSetter, false);
    document.querySelector(".pageBody").style.height = window.innerHeight;
    /***************fetch all master set names and render************** */
    renderQuestionNames();
    sessionStorage.removeItem('holdedAnswers');

    /***************************************************************** */
};