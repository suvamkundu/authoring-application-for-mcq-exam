/************check answer options on previos/next********** */
function checkAnsweredOptions(answered, type) {
    if (type === "single") {
        var radio = document.querySelectorAll('.questionViewer input[type=radio]');
        for (var i = 0; i < radio.length; i++) {
            for (var j = 0; j < answered.length; j++) {
                if (radio[i].value === answered[j]) {
                    radio[i].checked = true;
                }
            }
        }
    } else {
        var chechkBox = document.querySelectorAll('.questionViewer input[type=checkbox]');
        for (var i = 0; i < chechkBox.length; i++) {
            for (var j = 0; j < answered.length; j++) {
                if (chechkBox[i].value === answered[j]) {
                    chechkBox[i].checked = true;
                }
            }
        }
    }
}