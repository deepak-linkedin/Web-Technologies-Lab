document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const name = document.getElementById("name");
  const regNo = document.getElementById("regNo");
  const email = document.getElementById("email");
  const mobile = document.getElementById("mobile");

  const nameError = document.getElementById("nameError");
  const regNoError = document.getElementById("regNoError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");
  const successMessage = document.getElementById("successMessage");

  // Register button
  document.getElementById("registerBtn").addEventListener("click", () => {
    let valid = true;
    successMessage.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
      nameError.textContent = "Name can't be empty";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Registration number validation
    if (regNo.value.trim() === "") {
      regNoError.textContent = "Registration number can't be empty";
      valid = false;
    } else {
      regNoError.textContent = "";
    }

    // Email validation
    if (email.value.trim() === "") {
      emailError.textContent = "Email can't be empty";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Mobile validation
    if (mobile.value.trim() === "") {
      mobileError.textContent = "Mobile number can't be empty";
      valid = false;
    } else {
      mobileError.textContent = "";
    }

    if (valid) {
      successMessage.textContent = "Registration Successful!";
    }
  });

  // Cancel button → clear all fields
  document.getElementById("cancelBtn").addEventListener("click", () => {
    form.reset();
    nameError.textContent = "";
    regNoError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    successMessage.textContent = "";
  });

  // Back button → redirect to index.html
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // SIGN IN page logic
  const signinForm = document.getElementById("signinForm");
  if (signinForm) {
    const signinRegNo = document.getElementById("signinRegNo");
    const signinName = document.getElementById("signinName");
    const signinRegNoError = document.getElementById("signinRegNoError");
    const signinNameError = document.getElementById("signinNameError");
    const signinSuccessMessage = document.getElementById("signinSuccessMessage");

    // Sign In button
    document.getElementById("signinBtn").addEventListener("click", () => {
      let valid = true;
      signinSuccessMessage.textContent = "";

      if (signinRegNo.value.trim() === "") {
        signinRegNoError.textContent = "Registration number can't be empty";
        valid = false;
      } else {
        signinRegNoError.textContent = "";
      }

      if (signinName.value.trim() === "") {
        signinNameError.textContent = "Name can't be empty";
        valid = false;
      } else {
        signinNameError.textContent = "";
      }

      if (valid) {
        signinSuccessMessage.textContent = "Sign In Successful!";
      }
    });

    // Cancel button → clear all fields
    document.getElementById("cancelBtn").addEventListener("click", () => {
      signinForm.reset();
      signinRegNoError.textContent = "";
      signinNameError.textContent = "";
      signinSuccessMessage.textContent = "";
    });

    // Back button → redirect to index.html
    document.getElementById("backBtn").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
