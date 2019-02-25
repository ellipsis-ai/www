(function() {

  var messages = [
    "run stand-up meetings",
    "share a team calendar",
    "run 1-on-1 meetings",
    "run a smart service desk",
    "find out who is in the office today",
    "share staging environments",
    "deploy your code to production",
    "get a quick sales report",
    "get a quick product stats report",
    "do just about anything else you can think of",
    "get your work done"
  ];

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
    container.className = "position-absolute transition-layout";
    container.style.top = chatBox.clientHeight + "px";
    container.style.opacity = "0";
    container.appendChild(nextMessage);
    chatBox.appendChild(container);
    setTimeout(function() {
      var nextMessageLength = messages[messageIndex].length;
      if (lastMessage) {
        lastMessage.style.top = "-" + lastMessage.clientHeight + "px";
        lastMessage.style.opacity = "0";
      }
      container.style.top = "0px";
      container.style.opacity = "1";
      lastMessage = container;
      setTimeout(writeNextMessage, nextMessageLength * 100);
    }, 1);
  }

  function writeNextMessage() {
    var nextMessage = document.createElement("div");
    nextMessage.className = "box-chat-large";
    nextMessage.innerHTML = "…";
    var container = document.createElement("div");
    container.className = "position-absolute transition-layout";
    container.style.top = "0px";
    container.style.opacity = "1";
    container.appendChild(nextMessage);
    chatBox.removeChild(lastMessage);
    chatBox.appendChild(container);

    var text = messages[messageIndex];
    var nextIndex = 1;
    function nextChar() {
      if (nextIndex <= text.length) {
        nextMessage.innerHTML = "…" + text.slice(0, nextIndex);
        if (chatBox.scrollHeight > chatBox.clientHeight) {
          chatBox.style.height = chatBox.scrollHeight + "px";
        }
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
  chatBox.style.height = chatBox.clientHeight + "px";
  doTyping();
})();
