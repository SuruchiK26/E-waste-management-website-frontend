// Show Login form
function showLogin() {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("signupForm").style.display = "none";
  }
  
  // Show Signup form
  function showSignup() {
    document.getElementById("signupForm").style.display = "flex";
    document.getElementById("loginForm").style.display = "none";
  }
  
  // Validate Signup form
  function validateSignup() {
    const pass = document.getElementById("signupPass").value;
    const confirmPass = document.getElementById("signupConfirmPass").value;
    const errorDiv = document.getElementById("signupError");
  
    if (pass.length < 6) {
      errorDiv.textContent = "Password must be at least 6 characters!";
      return false;
    }
  
    if (pass !== confirmPass) {
      errorDiv.textContent = "Passwords do not match!";
      return false;
    }
  
    alert("Signup Successful!");
    errorDiv.textContent = "";
    return true;
  }
  
  // Validate Login form
  function validateLogin() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const errorDiv = document.getElementById("loginError");
  
    if (user === "" || pass === "") {
      errorDiv.textContent = "Please fill in all fields!";
      return false;
    }
  
    // Dummy login check
    if (user === "admin" && pass === "admin123") {
      alert("Login Successful!");
      errorDiv.textContent = "";
      return true;
    } else {
      errorDiv.textContent = "Invalid username or password!";
      return false;
    }
  }
  
  // Show Login form by default
  showLogin();
  