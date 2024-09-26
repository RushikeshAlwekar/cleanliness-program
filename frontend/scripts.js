// Add event listener for signup form (Volunteers)
document
  .getElementById("signupForm")
  ?.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const response = await fetch(
        "http://localhost:5000/api/volunteers/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      alert(data.message);
      this.reset(); // Reset form fields
    } catch (error) {
      alert("Error signing up. Please try again.");
    }
  });

// Add event listener for signup form (Hosts)
document
  .getElementById("hostSignupForm")
  ?.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("hostSignupName").value;
    const email = document.getElementById("hostSignupEmail").value;
    const password = document.getElementById("hostSignupPassword").value;

    try {
      const response = await fetch("http://localhost:5000/api/hosts/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      alert(data.message);
      this.reset(); // Reset form fields
    } catch (error) {
      alert("Error signing up. Please try again.");
    }
  });

// Add event listener for login form
document
  .getElementById("loginForm")
  ?.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const userType = document.querySelector(
      'input[name="userType"]:checked'
    )?.value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display welcome message
        // Redirect or perform further actions based on userType
        // Example: Redirect to specific homepage
        if (userType === "volunteer") {
          window.location.href = "volunteer_home.html"; // Redirect to volunteer home page
        } else {
          window.location.href = "host_home.html"; // Redirect to host home page
        }
      } else {
        alert(data.message); // Display error message
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
    }
  });
