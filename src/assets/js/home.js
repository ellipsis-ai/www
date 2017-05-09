(function() {

  var inviteSubmitButton = document.getElementById("inviteSubmit");
  var emailField = document.getElementById("email");
  var warning = document.getElementById("emailWarning");
  var chatBox = document.getElementById("chatBox");
  var sampleMessage = document.getElementById("sampleMessage");
  var messageDuration = 1500;

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
    } else if (!/.+@.+/.test(emailField.value)) {
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

  var messages = [
    "run stand-up meetings",
    "manage your calendars",
    "on-board new employees",
    "deploy new code",
    "compile sales reports",
    "approve job offers",
    "celebrate team success",
    "manage shared resources",
    "get your work done"
  ];

  var messageIndex = 0;
  var lastMessage;

  function doTyping() {
    var nextMessage = document.createElement("div");
    nextMessage.className = "box-chat-large type-pink";
    var innerMessage = document.createElement("div");
    innerMessage.className = "pulse";
    innerMessage.innerHTML = "…";
    nextMessage.appendChild(innerMessage);
    var container = document.createElement("div");
    container.className = "position-absolute animate-top";
    container.style.top = "100px";
    container.appendChild(nextMessage);
    chatBox.appendChild(container);
    setTimeout(function() {
      var nextMessageLength = messages[messageIndex].length;
      if (lastMessage) {
        lastMessage.style.top = "-100px";
      }
      container.style.top = "0px";
      lastMessage = container;
      setTimeout(writeNextMessage, nextMessageLength * 100);
    }, 1);
  }

  function writeNextMessage() {
    var nextMessage = document.createElement("div");
    nextMessage.className = "box-chat-large";
    nextMessage.innerHTML = "…";
    var container = document.createElement("div");
    container.className = "position-absolute animate-top";
    container.style.top = "0px";
    container.appendChild(nextMessage);
    chatBox.removeChild(lastMessage);
    chatBox.appendChild(container);

    var text = messages[messageIndex];
    var nextIndex = 1;
    function nextChar() {
      if (nextIndex <= text.length) {
        nextMessage.innerHTML = "…" + text.slice(0, nextIndex);
        nextIndex++;
        setTimeout(nextChar, Math.max(Math.random() * 75, 10))
      } else {
        lastMessage = container;
        if (messageIndex + 1 < messages.length) {
          messageIndex++;
          setTimeout(doTyping, messageDuration);
        } else {
          messageIndex = 0;
          setTimeout(doTyping, 10000);
        }
      }
    }
    setTimeout(nextChar, 10);
  }

  sampleMessage.className += " visibility-hidden";
  doTyping();
})();
