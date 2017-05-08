(function() {

  var inviteSubmitButton = document.getElementById("inviteSubmit");
  var emailField = document.getElementById("email");
  var warning = document.getElementById("emailWarning");

  function handleKeypress(event) {
    if (event.which === 13) {
      checkEmail(event);
    }
  }

  function updateWarning(text) {
    if (text) {
      warning.innerHTML = "<div class='fade-in'>" + text + "</div>";
    } else {
      warning.innerHTML = "";
    }
  }

  function checkEmail(event) {
    var error;
    if (!emailField.value) {
      error = "Please enter your email address to continue.";
    } else if (/.+@.+/.test(emailField.value)) {
      error = "Please enter a valid email address.";
    }

    if (error) {
      event.preventDefault();
      updateWarning(error);
    } else {
      updateWarning();
    }
  }

  emailField.addEventListener("keypress", handleKeypress);
  inviteSubmitButton.addEventListener("click", checkEmail);

})();
