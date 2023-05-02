//definiendo sign in message

if (signinMessage) {
  document.getElementById("signin-message").textContent = signinMessage;
    const signinMessageElement = document.createElement("p");
    signinMessageElement.textContent = signinMessage;
    document.body.appendChild(signinMessageElement);
  }
  
  if (signupMessage) {
    const signupMessageElement = document.createElement("p");
    signupMessageElement.textContent = signupMessage;
    document.body.appendChild(signupMessageElement);
  }
  