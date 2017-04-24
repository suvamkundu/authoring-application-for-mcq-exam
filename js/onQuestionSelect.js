  function fetchSelectedQuestion() {
      var allCheckBox = document.querySelectorAll('input[type="checkbox"]');
      bindChange(allCheckBox);
  };

  function bindChange(checkBoxes) {
      //   console.log(checkBoxes);
      var textBoxes = document.querySelectorAll('.set-name');
      for (var x = 0; x < checkBoxes.length; x++) {
          checkBoxes[x].addEventListener('change', function(event) {
              var checked = document.querySelectorAll('input[type="checkbox"]:checked')
              if (checked.length > parseInt(0)) {
                  document.querySelector('.setter').disabled = false;
                  textBoxes[0].disabled = false;
                  textBoxes[1].disabled = false;
              } else {
                  document.querySelector('.setter').disabled = true;
                  textBoxes[0].disabled = true;
                  textBoxes[1].disabled = true;
              }
              //   console.log(checked.length);
          }, false);
      }
  };