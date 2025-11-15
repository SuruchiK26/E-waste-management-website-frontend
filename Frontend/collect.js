document.addEventListener("DOMContentLoaded", function () {
document.getElementById("ewasteForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let ewasteType = document.getElementById("ewaste-type").value;

    if (name && email && address && ewasteType) {
        document.getElementById("responseMessage").innerText = "Thank you! Your e-waste pickup is scheduled.";
    } else {
        document.getElementById("responseMessage").innerText = "Please fill all the fields.";
    }
});
});

function showPopup() {
    var popup = document.getElementById("successPopup");
    popup.classList.add("show");

    // Hide after 3 seconds
    setTimeout(function() {
      popup.classList.remove("show");
    }, 3000);
  }