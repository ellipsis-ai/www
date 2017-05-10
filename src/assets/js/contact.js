(function() {
  var requiredFieldNames = ["FNAME", "LNAME", "COMPANY", "EMAIL"];
  var requiredRadios = ["METHOD"];
  var fieldDescriptions = {
    "FNAME": "first name",
    "LNAME": "last name",
    "COMPANY": "company name",
    "EMAIL": "email address",
    "METHOD": "preferred contact method"
  };
  var contactForm = document.getElementById("contactForm");
  var errorMessageBox = document.getElementById("errorMessages");

  function isInvalidEmail(value) {
    return !/.+@.+/.test(value);
  }

  function descriptionFor(name) {
    return fieldDescriptions[name];
  }

  function validate(event) {
    var fieldsMissing = [];
    var invalidEmail = false;
    var errorMessages = [];
    requiredFieldNames.forEach(function(name) {
      var input = contactForm.elements[name];
      if (!input.value) {
        fieldsMissing.push(name);
      }
      if (input.type === "email" && isInvalidEmail(input.value)) {
        invalidEmail = true;
      }
    });
    requiredRadios.forEach(function(name) {
      var radios = contactForm.elements[name];
      var anyChecked = false;
      var index = 0;
      while (!anyChecked && index < radios.length) {
        anyChecked = radios[index].checked;
        index++;
      }
      if (!anyChecked) {
        fieldsMissing.push(name);
      }
    });
    if (fieldsMissing.length === 1) {
      errorMessages.push("Please include your " + fieldDescriptions[fieldsMissing[0]] + ".");
    } else if (fieldsMissing.length === 2) {
      errorMessages.push(
        "Please include your " +
        fieldsMissing.map(descriptionFor).join(" and ") + "."
      )
    } else if (fieldsMissing.length > 2) {
      errorMessages.push(
        "Please include your " +
        fieldsMissing.slice(0, -1).map(descriptionFor).join(", ") +
        ", and " +
        fieldsMissing.slice(-1).map(descriptionFor).join("") + "."
      );
    }
    if (fieldsMissing.indexOf("EMAIL") === -1 && invalidEmail) {
      errorMessages.push("Please include a valid email address.");
    }
    if (errorMessages.length > 0) {
      event.preventDefault();
      errorMessageBox.innerHTML =
        "<div class='fade-in'>" +
          errorMessages.map(function(err) { return "<p>" + err + "</p>"; }).join("") +
        "</div>";
    } else {
      errorMessageBox.innerHTML = "";
    }
  }
  contactForm.addEventListener("submit", validate);
})();
