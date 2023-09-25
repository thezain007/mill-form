const scriptURL =
  "https://script.google.com/macros/s/AKfycbx-qudksqWALRZVU57nQqPfOtOjcTIjUnJrEBX0eyIidjL7Ozx8EwopDq7q5kBZnqH6Bw/exec";

const form = document.forms["mill-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", mode: "cors", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
